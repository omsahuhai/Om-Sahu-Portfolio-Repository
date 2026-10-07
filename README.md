<div align="center">

# Om Sahu — Portfolio Website

**Full-Stack Developer**  
Raipur, Chhattisgarh, India

[![Live Portfolio](https://img.shields.io/badge/Live_Portfolio-omsahu.ccbp.tech-7f5af0?style=for-the-badge&logo=googlechrome&logoColor=white)](https://omsahu.ccbp.tech)
[![GitHub](https://img.shields.io/badge/GitHub-omsahuhai-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/omsahuhai)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Om_Sahu-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/omsahuhai)
[![License: MIT](https://img.shields.io/badge/License-MIT-2ea44f?style=for-the-badge)](LICENSE)

<br />

<p align="center">
  A clean, modern, and high-performance personal portfolio built with semantic HTML5, vanilla CSS3, and modern JavaScript. Features a signature Lavender & Slate design system, interactive typewriter animations, product-first project breakdowns, an interactive dashboard UI mockup for Easy Manager, factual milestones, and real direct contact channels.
</p>

[View Live Site](https://omsahu.ccbp.tech) · [Report Bug](https://github.com/omsahuhai/omsahu.ccbp.tech/issues) · [Request Feature](https://github.com/omsahuhai/omsahu.ccbp.tech/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Design System & Aesthetics](#-design-system--aesthetics)
- [Featured Projects](#-featured-projects)
- [Technical Skills](#-technical-skills)
- [Education & Achievements](#-education--achievements)
- [Certifications & Training](#-certifications--training)
- [Repository Structure](#-repository-structure)
- [Getting Started Locally](#-getting-started-locally)
- [Deployment](#-deployment)
- [Contact & Connect](#-contact--connect)
- [License](#-license)

---

## 🌐 Overview

This repository hosts the official personal portfolio website for **Om Sahu** ([omsahu.ccbp.tech](https://omsahu.ccbp.tech)), highlighting:

- **Full-Stack Web Development:** Production web applications built with Next.js, React, TypeScript, Node.js, Express, and PostgreSQL.
- **Product-First Engineering:** Focus on real-world utility, user problems solved, operational data validation, and automated financial/operational reporting.
- **Applied AI Integration:** Integrating Google Gemini API into web applications for structured document extraction, syllabus mapping, and eligibility checks.
- **Client Delivery:** Commercial single-page applications with mobile-first cart and structured WhatsApp ordering.

---

## ✨ Key Features

- **⚡ Fast & Lightweight:** Zero heavy frontend framework overhead. 3-file architecture (`index.html`, `index.css`, `index.js`) for sub-second load times.
- **🎨 Lavender Modern Design System:** Curated light palette (`#7f5af0` vibrant lavender, `#f8f7fc` soft lavender tint, and `#1a1523` deep slate text) with glassmorphism navbar.
- **⌨️ Typewriter Hero Animation:** Dynamic role transitions highlighting core competencies (Full-Stack Developer, Next.js & React Specialist, TypeScript & Node.js Builder, Applied AI & Web Developer).
- **📱 Easy Manager Dashboard UI Simulation:** Live fuel station management card displaying meter tracking metrics, active rates, and operational validation status with illustrative data.
- **🍱 Categorized Technical Skills:** Five clean skill groups covering Languages, Frontend, Backend, Databases, and AI/GenAI without disproportionate tool flexing.
- **🏆 Factual Achievements & Credentials:** Dedicated milestone section highlighting National Hackathon qualification and competitive coding wins, alongside a compact certificate showcase.
- **📬 Real Direct Contact:** One-click email copy button, direct mail composer, WhatsApp chat link, and profile links without simulated fake states.
- **♿ SEO & A11y Optimized:** Semantic HTML5 structure, descriptive ARIA tags, Open Graph meta previews, and keyboard navigation.

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
| `--text` | `#1a1523` | High-contrast slate typography |
| `--muted` | `#5e586c` | Secondary descriptive text |
| `--border` | `#e6e3f3` | Component framing and divider lines |
| `--radius` | `12px` | Harmonious border radius for cards & containers |

### Typography
- **Headings & Display:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Weights: 600, 700, 800)
- **Body & Copy:** [Inter](https://fonts.google.com/specimen/Inter) (Weights: 400, 500, 600)
- **Code & Accents:** [DM Mono](https://fonts.google.com/specimen/DM+Mono) (Weights: 400, 500)

---

## 🚀 Featured Projects

### 1. Easy Manager — Petrol Pump Management SaaS
> **Stack:** Next.js · TypeScript · Supabase PostgreSQL · Server Actions · Zod · Tailwind CSS  
> **Links:** [Live Demo](https://ez-manager.vercel.app) · [GitHub](https://github.com/omsahuhai/easy-manager)

- Multi-business vertical SaaS developed for Indian retail petrol-pump operators.
- Implements tenant data isolation using Supabase Auth with Row-Level Security (RLS) scoped by `business_id`.
- Type-safe Next.js Server Actions with strict Zod schema validation for core business workflows.
- Centralized PostgreSQL reporting views for automated daily fuel sales, expenses, dealer margins, and monthly profitability summaries.
- Meter continuity validation to prevent odometer logging errors and gap discrepancies.

### 2. College Papers — AI Exam Prep Platform
> **Stack:** Next.js 14 · React · Google Gemini API · Supabase · Tailwind CSS  
> **Links:** [Live Demo](https://collegepapers.vercel.app/) · [GitHub](https://github.com/omsahuhai/collegepapers)

- Developed for the **Idea2Impact National Hackathon 2026**.
- Integrates Google Gemini API into document-analysis endpoints to extract syllabus mapping, recurring question themes, and topic weightage from previous-year exam PDFs.
- Features a situation-aware study strategy engine tailoring revision plans based on available prep time.
- Serverless document parsing pipelines for rapid multi-page question paper ingestion.

### 3. Raw & Real — Food & Juice Ordering SPA
> **Stack:** JavaScript (ES6+) · Vite · Tailwind CSS · WhatsApp Web API  
> **Links:** [Live Demo](https://raw-and-real.vercel.app/) · [GitHub](https://github.com/omsahuhai/Raw-and-Real)

- Production mobile-first ordering single page application built for a local Raipur juice bar.
- Interactive catalog of 40+ products with live search, nutritional highlights, and category filtering.
- Client-side cart state management with structured WhatsApp automated ordering payload for frictionless checkout.

### 4. TenderIQ — GovTech AI Intelligence Platform
> **Stack:** React · Node.js · Express · PostgreSQL · Google Gemini API · JWT  
> **Links:** [Live Demo](https://tender-iq-i2i.vercel.app) · [GitHub](https://github.com/aniilhr/TenderIQ)

- Team hackathon project analyzing government tender PDFs and business profiles to produce explainable eligibility and risk reports for MSMEs.
- Employs an "AI-extracts, rules-decide" pipeline pairing Gemini LLM extraction with deterministic compliance criteria and source citations.
- Engineered secure REST APIs with Node.js, Express, PostgreSQL, and JWT authentication.

---

## 🛠️ Technical Skills

```
Languages:   JavaScript (ES6+), TypeScript, SQL, Python, HTML5, CSS3
Frontend:    React.js, Next.js (App Router), Tailwind CSS, Responsive Design, State Management
Backend:     Node.js, Express.js, Next.js Server Actions, REST APIs, JWT Auth
Databases:   PostgreSQL, Supabase, MySQL, Relational Schema Design
AI / GenAI:  Google Gemini API, Structured JSON Extraction, Prompt Engineering, Document Analysis
```

---

## 🎓 Education & Achievements

- **Idea2Impact 2026 Hackathon** — Shortlisted for the National Hackathon at Hyderabad (National Finalist).
- **NxtCode — 7 Under 7 Code Challenge** — Winner in competitive algorithmic problem solving.
- **Pt. Ravishankar Shukla University** — Bachelor of Computer Applications (BCA) (2025–2028).
- **NxtWave Academy** — Full Stack (MERN) Development Track · CCBP 4.0 (2024–2028).

---

## 📜 Certifications & Training

- **Idea to Impact Hackathon 2026 — NxtWave** | Aug 2026  
  Participated in the Idea to Impact Offline Hackathon after qualifying for Round 2.  
  *Skills: React.js, Node.js*

- **Build and Launch Your MVP Workshop — NxtWave** | May 2026  
  Completed an MVP project using Lovable.dev, Supabase and Leonardo AI.  
  *Skills: Prompting, MVP Development*

- **Introduction to Databases — NxtWave** | May 2026  
  Completed the Databases Course Exam.  
  *Skill: SQL*

- **Build Your Own Dynamic Website — NxtWave** | Feb 2026  
  Completed the Dynamic Web Application Course Exam.  
  *Skill: JavaScript*

- **Build Your Own Responsive Website — NxtWave** | Feb 2026  
  Completed the Responsive Website Course Exam.  
  *Skills: Bootstrap, CSS Flexbox*

- **Build Your Own Static Website — NxtWave** | Feb 2026  
  Completed the Static Website Course Exam.  
  *Skills: HTML, CSS*

- **Generative AI Mega Workshop 2.0 — NxtWave** | Sep 2024  
  Built a pitch-ready product using 10+ AI tools.  
  *Skill: Generative AI*

- **MCP Mega Workshop — NxtWave** | Aug 2025  
  Explored Model Context Protocol and built prompt-driven AI workflows using real-world tools.  
  *Skills: MCP, Prompting*

- **Intro to Operating Systems — NxtWave** | May 2026  
  Completed the Foundation Course on Operating Systems.

- **XPM 4.0 Fundamentals — NxtWave** | Jan 2025  
  Completed foundational training in priority management and integrity.

---

## 📁 Repository Structure

```
omsahu.ccbp.tech/
├── index.html        # Semantic HTML5 structure, SEO meta tags, and accessible layout
├── index.css         # Complete design system: CSS tokens, cards, projects, responsive rules
├── index.js          # Pure JS modules: typewriter, sticky glass navbar, scrollspy, contact copy
├── favicon.svg       # Brand vector icon (Lavender square with OS monogram)
└── README.md         # Repository documentation, architecture overview, and setup guide
```

---

## 💻 Getting Started Locally

No complex dependencies or build steps are required.

### 1. Clone the repository
```bash
git clone https://github.com/omsahuhai/omsahu.ccbp.tech.git
cd omsahu.ccbp.tech
```

### 2. Run locally

Open `index.html` directly in your browser or run a lightweight local HTTP server:

```bash
# Option A: Python HTTP Server (Recommended)
python3 -m http.server 3000

# Option B: Node.js serve
npx serve .
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Contact & Connect

- **Website:** [omsahu.ccbp.tech](https://omsahu.ccbp.tech)
- **Email:** [om.colab1@gmail.com](mailto:om.colab1@gmail.com)
- **Phone / WhatsApp:** [+91 91316 31215](tel:+919131631215)
- **GitHub:** [@omsahuhai](https://github.com/omsahuhai)
- **LinkedIn:** [linkedin.com/in/omsahuhai](https://www.linkedin.com/in/omsahuhai)
- **Location:** Raipur, Chhattisgarh, India

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
