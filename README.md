# 🔥 Firefox Digital Team Profile — Editing Map & Guide

Welcome to the **Firefox Digital Team Profile**. This website is a modern, single-page team portfolio designed for the **Firefox** team, showcasing its members, leadership, achievements, and identity through a clean Japanese-inspired interface with subtle animations and interactive editing.

All content, styling, and functionality are contained within a **single `index.html` file**, making deployment on GitHub Pages or any static hosting service quick and simple.

---

# 📖 About the Team

**Team Name:** Firefox

**Team Slogan:** *Be the Fire.*

**Captain:** Nithya R Nair

**Vice Captain:** Athul John Joseph

Firefox represents intelligence, adaptability, passion, and teamwork. Inspired by the fox and the element of fire, the team believes in leading through action and helping each member grow together.

---

# 🗺️ Website Structure

Everything is centralized inside **`/index.html`**.

| Section | Description | Editable Content |
|----------|-------------|------------------|
| **Head** | Fonts, Tailwind CSS, animations, colors | Theme colors, fonts, animations |
| **Hero** | Landing page | Team name, slogan, logo |
| **About Firefox** | Team philosophy | Vision, mission, identity, logo explanation |
| **Captain Section** | Nithya R Nair profile | Photo, quote, biography, achievements |
| **Vice Captain Section** | Athul John Joseph profile | Photo, quote, biography, achievements |
| **Member Profiles** | Individual member cards | Photos, descriptions, links, phone numbers |
| **Badge Navigation** | Floating navigation badges | Member shortcuts |
| **Team Reflection** | Strengths and future goals | Text content |
| **Footer** | Closing section | Credits and footer text |
| **Scripts** | Scroll animations & Edit Mode | Interactive behaviour |

---

# 👥 Team Members

| Member | Role | Highlight |
|---------|------|-----------|
| **Nithya R Nair** | Captain | Classical Dancer |
| **Athul John Joseph** | Vice Captain | Rajya Puraskar Awardee |
| **Lily Elizabeth** | Member | Karate |
| **Sangeeth M** | Member | Video Editor |
| **Sharon Shabu** | Member | Part-time Professional |
| **Ajith E Joemon** | Member | Drummer |
| **R. Lakshmi** | Member | Former School Captain |
| **Aksa Sam** | Member | Studied Abroad |

---

# 🌸 Design Philosophy

The website combines modern minimalism with traditional Japanese aesthetics.

### Women's Theme

- Sakura (Cherry Blossom) accents
- Soft pink gradients
- Elegant floral backgrounds

### Men's Theme

- Plum Blossom accents
- Neutral white backgrounds
- Charcoal typography

The layout emphasizes:

- Large white spaces
- Thin dividers
- Soft shadows
- Glassmorphism
- Smooth scrolling
- Professional typography

---

# ⚡ Built-in Edit Mode

The website includes a fully client-side editing system.

No coding knowledge is required.

---

## Features

- Edit text directly on the page
- Replace profile photos
- Update LinkedIn buttons
- Modify phone numbers
- Edit biographies
- Change quotes
- Autosave changes
- Local browser storage
- Reset current session

---

## Using Edit Mode

### 1. Enable Editing

Hover over the **bottom-left corner** and click the **Edit (Pencil)** button.

---

### 2. Edit Text

Simply click on any highlighted text and start typing.

Examples include:

- Names
- Roles
- Quotes
- Descriptions
- Phone numbers
- Team slogan

---

### 3. Change Photos

Click on any profile picture.

Paste a direct image URL such as:

```
https://your-image-host.com/photo.jpg
```

Supported hosts include:

- Cloudinary
- ImgBB
- GitHub Raw URLs
- ImageKit
- Firebase Storage

---

### 4. Edit Buttons

Click a LinkedIn or Portfolio button.

You can change:

- Button text
- Destination URL

---

### 5. Autosave

Every change is automatically saved using browser **Local Storage**.

Refreshing the page keeps all edits.

---

### 6. Reset

During the same browser session you can restore the original page using the **Reset** button.

---

# 🖼️ Updating Images Manually

Locate the image tag:

```html
<img
    data-edit-key="member-photo"
    src="YOUR_IMAGE_URL"
    alt=""
>
```

Replace:

```
YOUR_IMAGE_URL
```

Example:

```html
<img
src="https://i.ibb.co/abcd123/nithya.jpg">
```

---

# 🔗 Image Hosting

Recommended image hosts:

- Cloudinary ⭐⭐⭐⭐⭐
- ImgBB ⭐⭐⭐⭐⭐
- ImageKit ⭐⭐⭐⭐☆
- GitHub Raw URLs ⭐⭐⭐⭐☆
- Firebase Storage ⭐⭐⭐⭐☆

Google Drive is **not recommended** because it is slower and may limit bandwidth.

---

# 🎨 Theme Colors

Inside the Tailwind configuration you'll find the primary colors.

| Color | Purpose | Hex |
|--------|----------|------|
| Sakura | Female accents | `#F7C8D8` |
| Plum | Male accents | `#6B3A60` |
| Charcoal | Primary text | `#1E1B18` |
| Muted | Secondary text | `#78716C` |
| White | Background | `#FFFFFF` |

---

# ➕ Adding a New Member

1. Duplicate an existing member section.

2. Change the section ID.

Example:

```html
<section id="john">
```

3. Update

- Photo
- Name
- Description
- Links
- Phone number

4. Duplicate one badge inside the badge navigation.

Update:

```javascript
onclick="document.getElementById('john').scrollIntoView({behavior:'smooth'})"
```

---

# 📁 Repository Structure

```
Firefox-Team/
│
├── index.html
├── README.md
├── LICENSE
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── favicon.ico
```

*(If your project is a true single-file deployment, only `index.html` and `README.md` are required. The `assets/` folder is optional for additional resources.)*

---

# 🚀 Deployment

The website can be hosted using:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Firebase Hosting
- Any static web server

No backend or database is required.

---

# 🛠️ Technologies Used

- HTML5
- Tailwind CSS
- Vanilla JavaScript
- Local Storage API
- CSS Animations
- Google Fonts
- SVG Icons

---

# 📱 Browser Support

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Opera

Modern browsers are recommended.

---

# 📜 License

This project is intended for educational and portfolio purposes.

Feel free to customize it for your own team or organization.

---

# ❤️ Credits

**Team:** Firefox

**Design Style:**
Japanese-inspired minimalist interface with Sakura and Plum Blossom aesthetics.

**Developed using:**

- HTML5
- Tailwind CSS
- JavaScript

**AI Assistance:**

This project was designed and developed with the assistance of AI tools for planning, UI/UX design, content organization, animation ideas, and code generation. The overall concept, team information, customization, and final integration were curated and refined by the project creator.

---

> **"Be the Fire."**
>
> Passion inspires. Leadership ignites. Together, we grow.
