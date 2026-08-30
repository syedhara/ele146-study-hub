# ELE 146 Study Hub

Personal pre-study, review, and quiz site for **ELE 146: Electric Motor Control**. Built as a static HTML/CSS/JS site (no build step) so it deploys directly to Vercel.

## Structure

```
index.html            Home page with links to Study Materials and Quiz
study/index.html       Study Materials hub (list of weeks)
study/week1.html        Week 1: Foundations of Motor Control
quiz/index.html         Multiple-choice quiz + flashcards (data in js/quiz.js)
notes/week1-foundations.md   Source markdown notes for Week 1
css/style.css           Shared styling
js/quiz.js              Quiz data and interactivity
```

## Adding a new week

1. Write source notes in a new file under `notes/` (e.g. `notes/week2-....md`).
2. Copy `study/week1.html` to `study/week2.html` and adapt the content.
3. Add a card for it in `study/index.html` (replace one of the "Coming soon" placeholders).
4. Add a new key (e.g. `week2`) to the `quizData` object in `js/quiz.js` with its own `mc` and `flashcards` arrays.

## Running locally

This is a static site — no dependencies to install. Serve it with any static server, for example:

```bash
npx serve .
```

or open `index.html` directly in a browser.

## Deploying to Vercel

1. Push this repo to GitHub (or another git provider).
2. Go to [vercel.com](https://vercel.com), import the repository, and deploy.
   Vercel auto-detects a static site — no build command or output directory is needed.
3. Alternatively, deploy from the CLI:

```bash
npx vercel        # first deploy, follow the prompts
npx vercel --prod # subsequent production deploys
```
