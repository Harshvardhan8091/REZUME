# Design and Architecture Decisions

This document outlines the core technical and design choices made during the development of the REZUME landing page for the Acdyon Technologies frontend assessment.

### 1. Why this approach over the obvious alternative?

**Approach: React + Vite with Vanilla CSS**

While Tailwind CSS or component libraries are popular "obvious" choices for rapid prototyping, a pure componentized Vanilla CSS approach utilizing CSS variables was chosen instead. 

**Reasoning:**
- **Custom Aesthetic:** The brief required a highly specific "premium dark SaaS" aesthetic with strict guidelines on visual constraints (no excessive gradients, no glowing blobs). Vanilla CSS provided absolute, pixel-perfect control over the design system without fighting utility classes.
- **Maintainability:** By isolating styles into highly specific component CSS files (e.g., `FeatureCard.css`, `ProductPreview.css`), the codebase remains extremely readable and easy to explain in a technical interview.
- **Performance:** Avoiding heavy animation libraries like Framer Motion or GSAP in favor of a lightweight, native `IntersectionObserver` combined with CSS transitions and `requestAnimationFrame` keeps the bundle size exceptionally small while respecting modern accessibility standards (`prefers-reduced-motion: reduce`).

### 2. Trade-offs made under the time limit

**Trade-off: Mock UI vs. Functional Backend**

The project exclusively features a frontend product UI demonstration. It visually simulates a resume upload, job description parsing, and an AI analysis response (mocking ATS compatibility and skill gaps). 

**What would be done with a real week:**
Given a full week, the natural next step would be connecting a real backend service. This would involve:
- Building an actual file uploader with drag-and-drop support, chunked uploading, and loading states.
- Integrating a real LLM or parsing API to extract data and dynamically generate the insights.
- Implementing robust error handling and loading skeletons while the analysis processes, rather than immediately firing the success animation.

### 3. AI Usage and Verification

**Usage:**
AI assistance was utilized heavily as a pair-programming partner to rapidly bootstrap the Vite environment, scaffold out the CSS structural boilerplates, and assist in scaffolding repetitive JSX structures (like the grid layouts for the features section).

**Verification:**
The AI-generated code was not blindly accepted. Specific manual verifications and adjustments included:
- **Responsive Logic:** Media queries and flex/grid behaviors were manually adjusted and verified to ensure no horizontal overflow existed on 390px mobile viewports.
- **Animation Syncing:** The staggered CSS `transitionDelay` logic and `requestAnimationFrame` timing for the main analysis micro-interaction were manually fine-tuned to ensure they felt cohesive and respected the 1000ms target without feeling sluggish.
- **Accessibility:** The `IntersectionObserver` trigger and the `prefers-reduced-motion` safety checks were strictly verified to ensure the animation only fires once and degrades gracefully for users who prefer reduced motion.
