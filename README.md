# Earlene Agestha Sugeng · Portfolio

A one-page, static portfolio site built with plain **HTML, CSS and JavaScript** (no frameworks, no build step).

## Structure

```
index.html        → all page content (hero, about, skills, 6 projects, contact)
css/style.css     → all styling, numbered sections in the same order as index.html
js/main.js        → scroll reveal animation, active nav link, scroll progress bar
CV/               → the downloadable CV (PDF)
Images/           → profile photo + ProjectX folders
```

## How things work

- **Navigation**: plain anchor links (`href="#about"`) + `scroll-behavior: smooth` in CSS.
- **Scroll animations**: elements with class `reveal` fade up when they enter the screen
  (`IntersectionObserver` in `js/main.js` adds the class `is-visible`).
- **Skill levels**: shown only on hover / tap, purely with CSS `:hover` and `:focus`.
  The bar length comes from the `data-level` attribute (1–5).
- **Photo galleries**: "justified rows". Each photo has `--ar` (width ÷ height);
  CSS flexbox uses it as `flex-grow`, so photos in one row share the same height without cropping.

## Updating the CV

1. Export the new CV as PDF.
2. Rename it to **`CV_EarleneAgesthaSugeng.pdf`** and replace the file in the `CV/` folder.
3. Commit & push to GitHub. Vercel redeploys automatically.

## Deploying

1. Push this folder to a GitHub repository.
2. On vercel.com → *Add New Project* → import the repository → Framework preset: **Other** → Deploy.

> Note: Vercel is case-sensitive with file names. `Images/Project4/project4-1.png` must stay lowercase
> exactly as referenced in `index.html` (same for `Porto1-4.png` and `Project5_1.png`).
