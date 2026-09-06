# CLAUDE.md — ELE 146 Study Hub

**Read this file first every session before touching any code.**

---

## Project Overview

**Name:** ELE 146 Study Hub
**Goal:** Personal pre-study, review, and quiz site for ELE 146 (Electric Motor Control) — study materials from class slides + personal notes + real-world/at-home examples, plus a self-quiz
**Owner:** Sri
**GitHub:** https://github.com/syedhara/ele146-study-hub
**Vercel:** (add after first deploy)
**Local path:** /Users/sriyedhara/Documents/ELE 146/Quiz/

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Static HTML/CSS/vanilla JS (no build step) |
| Styling | Plain CSS (css/style.css) |
| Hosting | Vercel (free tier, static site) |
| Version Control | GitHub |
| Backend / DB | None — quiz data lives in js/quiz.js |

---

## File Map

| If the task is about… | Read this file |
|-----------------------|----------------|
| Home page / top-level nav | index.html |
| Study Materials hub (list of weeks) | study/index.html |
| Week 1 content (Foundations of Motor Control) | study/week1.html |
| Week 2 content (Motors, Manual Control & Overload Protection) | study/week2.html |
| Source markdown notes per week | notes/week*-*.md |
| Quiz page (multiple choice + flashcards) | quiz/index.html |
| Quiz questions/flashcards data + interactivity | js/quiz.js |
| Shared styling | css/style.css |

---

## Key Decisions

- **Static site, no framework** — small personal study site, a build step adds no value.
- **Source-of-truth notes live in `notes/*.md`** — each week's HTML page in `study/` is a hand-written HTML rendering of the matching markdown file, kept in sync manually.
- **Quiz data is one JS object (`quizData`)** in `js/quiz.js`, keyed by week (`week1`, `week2`, …) — each week has its own `mc` (multiple choice) and `flashcards` arrays. The week `<select>` on the quiz page is generated from this object automatically.
- **Study Materials hub always shows a "Coming soon" placeholder card** for the next not-yet-written week, so the structure is visibly extensible.

---

## Adding a new week

1. Write source notes in `notes/weekN-topic.md`.
2. Copy `study/week1.html` (or the latest week) to `study/weekN.html` and adapt the content/headings.
3. In `study/index.html`, replace the next "Coming soon" placeholder card with a real card linking to `weekN.html`, and add a new placeholder after it.
4. Add a new `weekN` key to `quizData` in `js/quiz.js` with its own `mc` and `flashcards` arrays.
5. Commit and push — Vercel auto-deploys `main`.

---

## Useful Commands

```bash
npx serve .          # Preview locally (static site, no build)
node --check js/quiz.js   # Sanity-check quiz.js syntax after edits
git add -A
git commit -m "…"
git push             # Push to GitHub — Vercel auto-deploys
```
