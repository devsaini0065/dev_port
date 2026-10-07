# Dev Saini — Personal Portfolio Website
**1st Year B.Tech Computer Science & Engineering | JECRC University, Jaipur**

A modern, responsive, and student-focused personal portfolio website built with HTML5, CSS3, and JavaScript.

---

## 🌟 Features

- **Sticky Navigation Bar**: Smooth scrolling to all 7 sections (`Home`, `About Me`, `Education`, `Skills`, `Projects`, `Achievements`, `Contact`) with active section highlighting as you scroll.
- **Hero / Intro Section**: Highlights Dev Saini's identity as a 1st-year B.Tech CSE student at JECRC University, Jaipur, with quick CTA buttons and direct social links.
- **Dedicated About Me Section**: Prominently positioned right after Hero with an authentic student illustration (no fake photo), complete personal journey text, and 6 quick information cards.
- **Academic Timeline (Education)**: Visual vertical timeline detailing B.Tech at JECRC University, and Class 12 & Class 10 from HVN School.
- **Realistic Skills Showcase**:
  - *Programming Skills*: Highlights C and C++ with transparent "Currently Learning & Developing" badges (no fake expert percentages).
  - *Other Skills*: Web Development, Communication, Teamwork, Presentation, Problem Solving, and Learning & Adaptability.
- **Project Cards**:
  - *Personal Portfolio Website* (HTML, CSS, JavaScript)
  - *Running Website* (Practical web development project with interactive modal preview)
- **Growth Milestones (Achievements)**: Focuses on genuine first-year skill improvements and continuous learning without exaggerated awards or fake certificates.
- **Contact Section**: Verified LinkedIn & GitHub profile links, institution location details, and a validated contact form with an instant email draft launcher.
- **Theme Switcher**: Dark and Light mode toggle with persistent storage (`localStorage`).
- **Fully Responsive**: Optimized for smartphones, tablets, laptops, and desktop screens.

---

## 📁 Project Structure

```
c:\Users\ss\Desktop\dev_port\
├── index.html          # Main HTML document with semantic sections & update comments
├── css/
│   └── styles.css      # Design system, CSS variables, dark/light themes & responsiveness
├── js/
│   └── script.js       # Navigation scrollspy, mobile menu, theme toggle, form & modal logic
└── README.md           # Documentation and maintenance guide
```

---

## 🚀 How to Run Locally

1. Open File Explorer and navigate to `c:\Users\ss\Desktop\dev_port\`.
2. Double-click **`index.html`** to open it directly in your web browser (Chrome, Edge, Firefox, Brave, etc.).
3. The site runs 100% offline with zero dependencies required!

---

## ✏️ How to Update and Customize Later

All files have clear comments indicating where updates can be made:

### 1. Adding Live Project Links
In `index.html` (under `<section id="projects">`):
- Find `Project 1` or `Project 2`.
- Update the `<a href="...">` attribute with your live deployed URL or repository URL.

### 2. Updating Resume / Email
In `index.html` (under `<section id="contact">`):
- To connect a backend service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com), update the `<form>` `action` attribute.

### 3. Adding New Skills as You Advance
In `index.html` (under `<section id="skills">`):
- Duplicate any `.skill-card` block and adjust the language/tool name, description, and tags.

---

## 🌐 Free Hosting Options (Deployment)

1. **GitHub Pages (Recommended)**:
   - Push this folder to a GitHub repository named `devsaini0065.github.io` or `dev_port`.
   - Go to **Settings > Pages > Deploy from a branch (main)**.
   - Your website will be live at `https://devsaini0065.github.io`!

2. **Vercel / Netlify**:
   - Drag and drop the `dev_port` folder on [netlify.com/drop](https://app.netlify.com/drop) or import from GitHub on Vercel for instant free deployment.

---

&copy; 2026 Dev Saini. All Rights Reserved.
