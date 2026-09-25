<div align="center">

# Om Sahu — Portfolio Website

**Full-Stack Developer & AI Systems Engineer**  
Raipur, Chhattisgarh, India

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-omsahu.ccbp.tech-7f5af0?style=for-the-badge&logo=googlechrome&logoColor=white)](https://omsahu.ccbp.tech)
[![GitHub](https://img.shields.io/badge/GitHub-omsahuhai-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/omsahuhai)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Om_Sahu-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/omsahuhai)
[![License: MIT](https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  A clean, modern, and high-performance personal portfolio built with semantic HTML5, modular CSS3, and vanilla JavaScript. Features a signature Lavender & Slate design system, interactive typewriter animations, a bento-grid skill showcase, real-world SaaS project breakdowns, and accessible UI interactions.
</p>

[View Live Site](https://omsahu.ccbp.tech) · [Report Bug](https://github.com/omsahuhai/omsahu.ccbp.tech/issues) · [Request Feature](https://github.com/omsahuhai/omsahu.ccbp.tech/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Featured Projects Highlighted](#-featured-projects-highlighted)
- [Tech Stack](#-tech-stack)
- [Repository Structure](#-repository-structure)
- [Getting Started Locally](#-getting-started-locally)
- [Deployment](#-deployment)
- [Certifications & Honors](#-certifications--honors)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## 🌐 Overview

This repository hosts the official personal portfolio website for **Om Sahu** ([omsahu.ccbp.tech](https://omsahu.ccbp.tech)), showcasing expertise in:

- **Full-Stack SaaS Architecture:** Production platforms utilizing Next.js App Router, TypeScript, and Supabase PostgreSQL.
- **Database Security & RLS:** Enterprise-grade PostgreSQL schema designs with Row-Level Security (RLS) and multi-tenant isolation.
- **Generative AI & LLM Systems:** Applied Google Gemini API pipelines with structured JSON extraction, automated document intelligence, and situation-aware strategy engines.
- **Client Delivery:** Real-world commercial single-page applications with WhatsApp checkout and vertical retail management.

---

## ✨ Key Features

- **⚡ Fast & Lightweight:** Zero heavy frontend framework overhead. Built with clean, native web standards for sub-second load times.
- **🎨 Lavender Modern Design System:** Custom-tailored light-mode palette (`#7f5af0` vibrant lavender, `#f8f7fc` soft lavender tint, and `#1a1523` deep slate purple text) with glassmorphism backdrop filters.
- **⌨️ Typewriter Hero Animation:** Dynamic role cyclist highlighting core competencies (Full-Stack Developer, Next.js & TypeScript Specialist, AI & Gemini API Builder, SaaS Craftsman).
- **🍱 Bento Grid Architecture:** Modular responsive layout categorizing Frontend, Backend Server Actions, Database Security (RLS), GenAI/LLM pipelines, Cloud persistence, and Developer Tooling.
- **📱 Dashboard UI Simulation:** Live interactive fuel station SaaS card for *Easy Manager* displaying real-time meter tracking metrics and operational validation states.
- **📜 Smart ScrollSpy & Glass Navbar:** Sticky navigation with dynamic background blur on scroll, mobile hamburger drawer, and section-tracking active indicators.
- **📬 Interactive Transmission Form:** Contact submission with simulated packet delivery states and direct channel access (Email, Phone, GitHub, LinkedIn).
- **♿ SEO & A11y Optimized:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), descriptive ARIA tags, Open Graph meta previews, and accessible keyboard navigation.

---

## 🎨 Design System & Aesthetics

The portfolio uses an intentional, curated design system configured via CSS custom properties in [`index.css`](index.css):

| Token | Value | Purpose |
|---|---|---|
| `--accent` | `#7f5af0` | Primary brand purple / lavender accent |
| `--accent-hover` | `#623ad6` | Royal purple for hover and active button states |
| `--accent-light` | `#f1ecfe` | Soft lavender tint for badges, tags, and pills |
| `--accent-border`| `rgba(127, 90, 240, 0.15)` | Subtle accent border highlights |
| `--bg` | `#ffffff` | Clean primary canvas background |
| `--bg-alt` | `#f8f7fc` | Alternating section background |
| `--text` | `#1a1523` | High-contrast slate purple typography |
| `--muted` | `#5e586c` | Secondary descriptive text |
| `--border` | `#e6e3f3` | Component framing and divider lines |
| `--radius` | `12px` | Harmonious border radius for cards & containers |

### Typography
- **Headings & Display:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Weights: 600, 700, 800)
- **Body & Copy:** [Inter](https://fonts.google.com/specimen/Inter) (Weights: 400, 500, 600)
- **Code & Accents:** [DM Mono](https://fonts.google.com/specimen/DM+Mono) (Weights: 400, 500)

---

## 🚀 Featured Projects Highlighted

### 1. Easy Manager — Petrol Pump SaaS
> **Stack:** Next.js 14 · TypeScript · Supabase PostgreSQL · Server Actions · Zod · Tailwind CSS · RLS  
> **Links:** [Live App](https://ez-manager.vercel.app) · [GitHub](https://github.com/omsahuhai/easy-manager)

- Multi-business vertical SaaS developed for Indian retail petrol-pump operators.
- Implements strict PostgreSQL Row-Level Security (RLS) with `business_id` tenant isolation.
- Type-safe Next.js Server Actions with Zod runtime validation preventing meter continuity breaks.
- Automated daily fuel sales, expense tracking, dealer margins, and monthly profitability views.

### 2. Raw & Real — Ordering SPA
> **Stack:** JavaScript (ES6+) · Vite · Tailwind CSS · WhatsApp Web API  
> **Links:** [Live App](https://raw-and-real.vercel.app/) · [GitHub](https://github.com/omsahuhai/Raw-and-Real)

- Production mobile-first ordering single page application for a Raipur health & juice bar.
- Interactive catalog of 40+ products with live search, nutritional highlights, and category filtering.
- Client-side cart state management with structured WhatsApp automated ordering payload.

### 3. College Papers — AI Exam Prep
> **Stack:** Next.js 14 · React · Google Gemini API · Supabase · pdf-parse · Vercel  
> **Links:** [Live App](https://collegepapers.vercel.app/) · [GitHub](https://github.com/omsahuhai/collegepapers)

- Developed for the **Idea2Impact National Hackathon 2026**.
- Integrates Google Gemini API into document-analysis endpoints to extract syllabus mapping and recurring questions from historical exam PDFs.
- Features a situation-aware study strategy planner tailored to remaining preparation time.

### 4. TenderIQ — GovTech Intelligence
> **Stack:** React 19 · Vite · Node.js / Express · PostgreSQL · Supabase · Google Gemini · JWT  
> **Links:** [Live App](https://tender-iq-i2i.vercel.app) · [GitHub](https://github.com/aniilhr/TenderIQ)

- AI-powered tender analysis engine assisting MSMEs in evaluating public government tender documents.
- Employs an *AI-extracts / rules-decide* hybrid architecture pairing Gemini extraction with deterministic eligibility criteria and risk scoring.

---

## 🛠️ Tech Stack

```
Frontend:            HTML5, CSS3 (Custom Variables, Flexbox, Grid), JavaScript (ES6+)
Frameworks & Libs:   Next.js (App Router), React.js, Vite, Tailwind CSS
Backend:             Node.js, Express.js, Next.js Server Actions, REST APIs
Databases:           PostgreSQL, Supabase (RLS Policies), MySQL
AI & GenAI:          Google Gemini API, Structured JSON Extraction, Prompt Engineering
Tools:               Git, GitHub, Vercel, VS Code, Zod, pdf-parse
```

---

## 📁 Repository Structure

```
omsahu.ccbp.tech/
├── index.html        # Semantic HTML5 structure, SEO meta tags, and accessible layout
├── index.css         # Complete design system: CSS tokens, responsive bento grid, card styles
├── index.js          # Pure JS modules: typewriter, sticky glass navbar, scrollspy, contact form
├── favicon.svg       # Brand vector icon (Lavender square with OS monogram)
└── README.md         # Repository documentation, architecture overview, and setup guide
```

---

## 💻 Getting Started Locally

No complex dependencies, build steps, or package installations are required to run this portfolio.

### Prerequisites
A modern web browser (Chrome, Firefox, Safari, Edge).

### 1. Clone the repository
```bash
git clone https://github.com/omsahuhai/omsahu.ccbp.tech.git
cd omsahu.ccbp.tech
```

### 2. Run locally

You can open the project directly in your browser or run a lightweight local HTTP server:

#### Option A: Python HTTP Server (Recommended)
```bash
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Option B: Node.js `serve`
```bash
npx serve .
```

#### Option C: VS Code Live Server
Right-click on `index.html` inside VS Code and choose **"Open with Live Server"**.

---

## 🚀 Deployment

This static portfolio can be deployed in seconds to any static web hosting provider:

- **CCBP 4.0 Platform:** Deployed directly as the primary profile endpoint at `omsahu.ccbp.tech`.
- **GitHub Pages:** Go to *Repository Settings → Pages → Deploy from branch `main` / `root`*.
- **Vercel:**
  ```bash
  npm i -g vercel
  vercel --prod
  ```
- **Netlify:** Drag and drop the folder into Netlify Drop or link the Git repository.

---

## 🏆 Certifications & Honors

- **National Finalist** — Qualified for Idea 2 Impact Hackathon 2026 (National round at Hyderabad).
- **Winner** — NxtCode 7 Under 7 Competitive Programming Challenge.
- **CCBP 4.0 Track** — Full Stack Development (MERN) Scholar at NxtWave Academy (2024–2028).
- **Academic Degree** — Bachelor of Computer Applications (BCA) at SAGEMMC, Pt. Ravishankar Shukla University (2025–2028).
- **Verified Competencies** — Google Gemini & GenAI Systems, PostgreSQL Database Architecture & Row-Level Security.

---

## 📬 Contact & Connect

Feel free to connect for full-stack engineering roles, SaaS client engagements, or open-source collaborations:

- **Website:** [omsahu.ccbp.tech](https://omsahu.ccbp.tech)
- **Email:** [om.colab1@gmail.com](mailto:om.colab1@gmail.com)
- **Phone:** [+91 91316 31215](tel:+919131631215)
- **GitHub:** [@omsahuhai](https://github.com/omsahuhai)
- **LinkedIn:** [linkedin.com/in/omsahuhai](https://www.linkedin.com/in/omsahuhai)
- **Location:** Raipur, Chhattisgarh, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it as inspiration for your own portfolio.
