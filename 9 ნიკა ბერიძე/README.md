# Stripe‑Style Landing — **SASS (Pixel‑Close Edition)**

High‑fidelity, original implementation of a Stripe‑style homepage using **advanced SASS** and vanilla JS.

## What’s included
- **Command‑palette search** (header button + ⌘K/CTRL+K overlay)
- Hero with **language tabs** (JavaScript / Python / cURL) and **striped code** aesthetics
- Cards, windowed code preview, developers row, pricing, FAQ, CTA
- Sticky **glass** header, theme toggle (persisted), mobile nav, marquee logos
- **SASS**: variables maps, functions, mixins, placeholders, utility helpers


## Run
Open `index.html`. `css/main.css` is already compiled; `scss/` is the source.

## Optional: compile SASS
```bash
npm i -g sass
sass scss/main.scss css/main.css --style=expanded --no-source-map
```

> Educational clone inspired by Stripe. Not affiliated with Stripe.
