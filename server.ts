import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Use JSON middleware with 50MB limit to handle base64 image uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  const EDITS_FILE = path.join(process.cwd(), "data", "edits.json");

  // Helper to load edits
  function readEdits() {
    try {
      if (fs.existsSync(EDITS_FILE)) {
        const data = fs.readFileSync(EDITS_FILE, "utf-8");
        return JSON.parse(data);
      }
    } catch (err) {
      console.error("Error reading edits file:", err);
    }
    return {};
  }

  // Helper to save edits
  function writeEdits(edits: any) {
    try {
      const dir = path.dirname(EDITS_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(EDITS_FILE, JSON.stringify(edits, null, 2), "utf-8");
    } catch (err) {
      console.error("Error writing edits file:", err);
    }
  }

  // API Route FIRST: get all edits
  app.get("/api/edits", (req, res) => {
    res.json(readEdits());
  });

  // API Route FIRST: save single or multiple edits
  app.post("/api/edits", (req, res) => {
    const { key, val, edits } = req.body;
    const currentEdits = readEdits();

    if (edits && typeof edits === "object") {
      // Batch update
      Object.assign(currentEdits, edits);
    } else if (key) {
      // Single update
      currentEdits[key] = val;
    }

    writeEdits(currentEdits);
    res.json({ success: true });
  });

  // API Route FIRST: reset all edits
  app.post("/api/edits/reset", (req, res) => {
    writeEdits({});
    res.json({ success: true });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
