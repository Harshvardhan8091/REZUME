# REZUME

REZUME is an AI-powered resume intelligence interface designed to help job seekers understand how their resume aligns with a target role.

## Overview
REZUME provides a seamless, premium frontend experience demonstrating the core workflow of resume analysis. This project serves as a frontend hiring assessment for Acdyon Technologies, showcasing clean component architecture, responsive design, and purposeful micro-interactions without relying on heavy external animation libraries. 

## Features
- AI resume analysis dashboard UI
- ATS compatibility visualization
- Skills gap visualization
- Actionable resume feedback UI
- Resume + job targeting workflow
- Animated analysis score
- Responsive landing page
- Reduced-motion support

*Note: The analysis values are product UI demonstrations/mock data. No real AI backend processing is connected to this frontend.*

## Tech Stack
- React
- Vite
- CSS (Vanilla)
- JavaScript

## Getting Started

To run the project locally:

```bash
npm install
npm run dev
```

## Production Build

To generate the optimized production bundle:

```bash
npm run build
```

## Project Structure
- `src/components/`: Reusable, smaller components (e.g., `Navbar`, `Footer`, `FeatureCard`, `ProductPreview`).
- `src/sections/`: Major page sections composing the landing page (e.g., `Hero`, `Features`, `HowItWorks`, `FinalCTA`).
- `src/App.jsx`: The root component composing the overall page layout.
- `src/index.css`: Global styles, CSS variables, and design tokens.

## Design Decisions
The major design and architectural decisions made during development are documented separately in [DECISIONS.md](./DECISIONS.md).

## AI Usage
AI tools were utilized during the development of this project for planning, generating boilerplate, and implementation assistance. However, all structural choices, responsive rules, and final implementations were manually reviewed, refined, and verified to ensure high code quality and strict adherence to the project brief.
