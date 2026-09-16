

<!-- Start of picture text -->
© JAIN one<br><!-- End of picture text -->

# **MCA Semester – III Applied Learning Project Report** 

**Vinayak Suthar  241VMTR01506** 

## **Applied Learning Project** 

## **Master of Computer Applications** 

_Submitted by:_ 

**Vinayak Suthar** 



## **Table of Contents** 

||**Title**|**Page Nos.**|
|---|---|---|
|Introduction|||
|Features Implemented|||
|Technologies Used|||
|Live Deployment Details|||
|Results and Evaluation|||
|Conclusion|||



## **1. Introduction** 

Nexus Club is a single-page front-end website built for a fictional student community club. It serves as the club's public presence — introducing what the club does, listing upcoming events, showcasing a photo gallery of past activities, and letting visitors join or get in touch through a contact form.

The main goal of the project was to apply core front-end web development skills (HTML, CSS, and JavaScript) in a realistic, end-to-end build: starting from a static page skeleton in Stage 1, and progressively adding interactivity, dynamic behavior, and UI polish in Stage 2, without relying on any backend or server-side code.

Many student clubs and small organizations need a simple, fast, low-maintenance website to communicate with members — without the cost or complexity of a full web application. This project solves that problem by demonstrating a lightweight, purely static site that still feels dynamic and modern to the end user, thanks to client-side JavaScript.

**2. Features Implemented** 

**Stage 1 — UI and structure:**
- Single-page layout with five sections navigated via anchor links: Home, About, Events, Gallery, and Contact/Join.
- Consistent header with logo and navigation, and a shared footer across the page.
- Base color scheme, typography, and spacing applied through an external stylesheet.
- Responsive layout using CSS Grid and media queries, including a collapsible mobile navigation menu.
- A custom SVG logo used in both the header and footer.

**Stage 2 — Interactivity and polish:**
- **Image/content carousel (Gallery section):** A sliding carousel with previous/next arrow controls, clickable dot indicators, and automatic slide rotation every few seconds.
- **Event filter (Events section):** Filter buttons (All, Social, Workshop, Hackathon) that instantly show or hide event cards by category using JavaScript, without reloading the page.
- **Contact form validation:** Front-end-only validation on the join/contact form — the full name and email fields are checked as the user types and on submit, with inline error messages and colored input borders (red for invalid, green for valid); the form only shows a success message once all fields pass validation.
- **Scroll and hover animations:** Sections and cards fade and slide into view as the user scrolls down the page (using the Intersection Observer API), and cards lift slightly with a shadow on hover.
- **Dark/Light mode toggle:** A header button switches the entire site between light and dark themes using CSS custom properties, and the chosen theme is saved in `localStorage` so it persists across page reloads.

All the above features are fully working in the final version of the site, with no broken links, missing assets, or console errors.

**3. Technologies Used** 

- **HTML5** — semantic page structure (`header`, `main`, `section`, `footer`).
- **CSS3** — custom properties (variables) for theming, Flexbox and Grid for layout, media queries for responsiveness, transitions for animations.
- **JavaScript (vanilla, ES5/ES6)** — no external frameworks or libraries; DOM manipulation, event handling, the Intersection Observer API, and `localStorage`.
- **Git & GitHub** — version control and source hosting.
- **GitHub Pages** — static site hosting for live deployment.

**4. Live Deployment Details** 

- **Live URL:** _[to be added after deployment]_
- **Deployment platform:** GitHub Pages
- **Login credentials:** Not applicable — the site is a public static website with no authentication, login, or backend required for evaluation.

**5. Results and Evaluation** 

The final project is a fully functional, responsive, single-page website that meets all the outcomes expected for both stages: a complete UI skeleton with all required sections, and working interactivity layered on top of it in Stage 2 (carousel, event filtering, form validation, scroll/hover animations, and a dark/light mode toggle — five interactive features in total, exceeding the minimum requirement of three).

The site was manually tested in a browser across desktop and mobile viewport sizes. Navigation links, the mobile menu, the carousel controls, the event filters, the contact form validation states, and the theme toggle were all verified to work correctly, with no console errors. The layout reflows correctly at common breakpoints (around 800px and 640px), and the dark/light theme applies consistently across every section, including the header and footer.

Overall, the project meets its initial requirements: a clean, organized, purely front-end website that is easy to navigate, visually consistent, and demonstrably interactive, built entirely with HTML, CSS, and JavaScript.

**6. Conclusion** 

This project was a practical exercise in building a complete website from the ground up in two stages — first focusing on structure and visual design, then layering in interactivity and refinement. It reinforced core front-end concepts such as semantic HTML, responsive CSS layout with Grid and Flexbox, CSS custom properties for theming, and vanilla JavaScript techniques including DOM events, form validation, and the Intersection Observer API for scroll-based animation.

Key skills gained include structuring a multi-section single-page site cleanly, writing maintainable and reusable CSS using variables, implementing common UI patterns (carousels, filters, validated forms, theme toggles) without relying on third-party libraries, and deploying a static site for public access via GitHub Pages.

Overall, the experience of completing this project was a useful, hands-on reinforcement of front-end fundamentals, and a good demonstration of how far plain HTML, CSS, and JavaScript can go in building a polished, interactive website without any backend.
