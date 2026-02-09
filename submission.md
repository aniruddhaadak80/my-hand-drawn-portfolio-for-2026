*This is a submission for the [New Year, New You Portfolio Challenge Presented by Google AI](https://dev.to/challenges/new-year-new-you-google-ai-2025-12-31)*

## About Me

I'm Aniruddha Adak, an AI Agent Engineer specializing in building autonomous systems that can think, plan, and execute. I believe in the power of **"Authentic Imperfection"**—that technology should feel human, approachable, and creative, not just sterile and efficient.

With this portfolio, I wanted to break away from the standard corporate sleekness and create something that reflects my rigorous engineering background wrapped in a playful, hand-drawn aesthetic. It's a digital sketchbook where my code comes to life.

## Portfolio

{% embed https://hand-drawn-portfolio-demo.vercel.app %}

> **Live Demo:** [https://hand-drawn-portfolio-demo.vercel.app](https://hand-drawn-portfolio-demo.vercel.app)
> **Source Code:** [https://github.com/AniruddhaAdak/hand-drawn-portfolio](https://github.com/AniruddhaAdak/hand-drawn-portfolio)

## How I Built It

### The "Paper & Ink" Tech Stack
I chose a minimalist, dependency-free approach to ensure maximum performance and creativity:
- **HTML5**: Semantic structure for 50+ unique sections.
- **CSS3**: No frameworks. Custom CSS variables for the hand-drawn design system.
- **Vanilla JavaScript**: Lightweight Intersection Observers for scroll animations.
- **Google Fonts**: `Kalam` for headings and `Patrick Hand` for body text to mimic handwriting.

### Google AI Tools Used
I leveraged **Google's Gemini 1.5 Pro** via **Project IDX** and the **Gemini API** to accelerate development:

1. **Code Generation & Refactoring**:
   - Used Gemini to generate the initial HTML structure for 56 unique sections.
   - Asked Gemini to "convert this standard grid layout into a masonry layout with CSS columns."
   - Utilized Gemini's understanding of CSS clip-paths to create the complex "wobbly border" shapes without SVG assets.

2. **Content Creation**:
   - Generated placeholder blog posts and project descriptions using Gemini.
   - Brainstormed 50+ unique section ideas (from "Pet Projects" to "Daily Routine").

3. **Debugging & Optimization**:
   - Solved complex scroll animation logic issues by pasting the JS code into Gemini.
   - Optimized the CSS for performance, ensuring 60fps animations even with 50+ animated elements.

### Design Decisions
- **Wobbly Borders**: Instead of standard `border-radius: 8px`, I used multi-value radii like `255px 15px 225px 15px / 15px 225px 15px 255px` to create organic, imperfect shapes.
- **Paper Texture**: A subtle CSS radial gradient background mimics the grain of paper.
- **Tape & Tacks**: CSS pseudo-elements (`::before`, `::after`) create the illusion of sticky tape and thumbtacks holding the content cards.

## What I'm Most Proud Of

### 1. The sheer Scale (50+ Sections)
Most portfolios have 4-5 sections. I pushed the limits to **56 unique sections**, covering everything from my "Tech Wishlist" to "Music Preferences." It's a comprehensive digital identity.

### 2. The Animation Engine
I built a custom, lightweight animation engine that supports **15+ different entrance effects**:
- `slide-left` / `slide-right` with rotation
- `bounce-in` for playful headers
- `stagger-children` for grids
- `draw-line` for SVG paths

### 4. The "Social" Footer
I didn't just want a static footer. I integrated **12 different social platforms** (from GitHub to Letterboxd style CodePen links) with custom hand-drawn icons that wiggle on hover. It's fully connected.

### 5. Google Antigravity Integration
Using **Google Antigravity** (the agentic coding assistant) was a game-changer. It allowed me to:
- Rapidly prototype complex layouts.
- Manage the massive 2000+ line HTML file without getting lost.
- Automatically fix "mojibake" (corrupted characters) and clean up the code.
- Implement the "Copyright 2026" futuristic touch!

![Hand Drawn Portfolio Screenshot](https://raw.githubusercontent.com/AniruddhaAdak/my-hand-drawn-portfolio-for-2026/main/screenshot.png)

---
*Thanks for checking out my submission!*
