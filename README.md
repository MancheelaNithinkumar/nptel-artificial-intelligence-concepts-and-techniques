# HCI Practice Studio

A Next.js App Router and TypeScript practice application using all 120 questions from the supplied NPTEL HCI Weeks 1–12 PDF.

## Run locally

**Ready-to-run version:** with Node.js installed, double-click `start.cmd` on Windows, or run `node scripts/serve.mjs`. Open http://127.0.0.1:3011. The included `out/` folder is already built; no package installation is needed to use it. Keep the terminal open while practicing.

**For development:**

Install Node.js 20.9 or newer, then run:

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Features

- All 12 weeks with 10 questions each, preserving the supplied question text, options, and answer key.
- Unlimited, untimed week practice and custom mixes with 0–10 questions from each week.
- Merge all 120 questions, or try one question from Week 1 and four from Week 4.
- Shuffled question order, optional instant feedback, exact-set grading for multi-answer questions.
- Session navigation, save and resume, answer review, retry all or missed questions.
- Searchable question bank, bookmarks, accuracy, and per-week progress.
- Browser-local persistence. No account or database required. Progress is specific to this browser and origin; clearing site data removes it.

## Verification and build

```sh
npm test
npm run build
```

The app exports to `out/` for static hosting. `npm start` serves that build on localhost. Hosting the `out/` folder also works with a static hosting provider.

The question bank is `lib/questions.json`. Scoring follows the uploaded PDF, including its multi-answer keys. This is an independent practice tool, not an official NPTEL service. A correct score requires all correct options and no extra options; unanswered questions score zero. Progress counts distinct questions answered correctly at least once in a completed session.
