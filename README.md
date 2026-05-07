# GRADIION LMS Student Environment

GRADIION LMS is a student-facing learning environment for structured capability development under pressure. It is built as a Next.js / React / Tailwind student shell with a dark institutional GRADIION visual language, ivory reading spaces, and mock/local student progression.

This is not a generic course dashboard. The current build is focused on the student experience, capability evidence, local lecture flow logic, and mock submission records.

## Current Routes

- `/student` - Student Home / Command Chamber
- `/student/phase/phase-1a` - Phase Page / Access Hall
- `/student/module/module-1` - Module Page / Module Ledger
- `/student/lecture/lecture-2` - Lecture Page / Reading Chamber
- `/student/submissions` - Submissions Page / Record Room

No Lecture 03 route exists yet.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Install Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Then open:

```text
http://localhost:3000/student
```

## Build

```bash
npm run build
```

## Start Production Build

After a successful build:

```bash
npm run start
```

## Package Scripts

The project currently includes:

- `npm run dev` - starts the Next.js development server.
- `npm run build` - creates a production build.
- `npm run start` - starts the production server after build.
- `npm run lint` - runs Next linting.

## Mock / Local Only

The current LMS uses mock data and local browser state only.

- Phase, module, lecture, and submission records are mocked in `src/lib/student-data.ts`.
- Lecture 02 progress is stored locally through `src/lib/student-progress.ts`.
- Completion state uses browser `localStorage`.
- Refresh preserves Lecture 02 completion only when localStorage has not been reset.
- `Reset Local Progress` clears local MVP progress.
- Submissions are mock capability evidence records, not database records.
- GCP Video Response Drill is a mock/local drill and does not record video.
- Field Application data is local component state during the lecture flow.

## Current Limitations

- No backend.
- No authentication.
- No real camera recording.
- No upload or storage.
- No admin review system.
- No AI marking.
- No real resubmission workflow.
- No payments.
- No certificates.
- No email notifications.
- No Lecture 03 route yet.
- No database persistence.

## How To Test The Current LMS Flow

1. Start the app:

```bash
npm run dev
```

2. Open:

```text
http://localhost:3000/student
```

3. Confirm Student Home shows:

- Current location: Phase 1A / Module 1 / Lecture 02.
- Primary action: Continue Lecture 2.

4. Open the Phase Page:

```text
http://localhost:3000/student/phase/phase-1a
```

Confirm:

- Phase 1A is Active.
- Phase 1B is Locked.
- Capstone Exam is Locked.

5. Open the Module Page:

```text
http://localhost:3000/student/module/module-1
```

Confirm:

- Lecture 01 is Complete.
- Lecture 02 is Active.
- Lecture 03 is Locked before local completion.

6. Open Lecture 02:

```text
http://localhost:3000/student/lecture/lecture-2
```

Complete the local required flow:

- Watch Video acknowledgement.
- Terminology Pulse review.
- Decision Check mock MCQs.
- GCP Video Response Drill mock steps.
- Field Application Task fields.
- Completion Gate.

7. Click `Complete Lecture`.

Confirm:

- Lecture 02 becomes complete in localStorage.
- Student Home changes current requirement to Lecture 03.
- Module Page shows Lecture 02 Complete and Lecture 03 Active.
- Lecture 03 CTA remains disabled because the route has not been built yet.

8. Open Submissions:

```text
http://localhost:3000/student/submissions
```

Confirm:

- GCP Prompt - Lecture 1: Pending Review.
- Decision Check - Lecture 1: Approved.
- Reflection - Lecture 1: Approved.
- After local Lecture 02 completion, local records can show:
  - GCP Video Response - Lecture 2: Pending Review.
  - Field Application - Lecture 2: Correction Required.

## Important Files

- `src/app/student/page.tsx` - Student Home / Command Chamber.
- `src/app/student/phase/phase-1a/page.tsx` - Phase access page.
- `src/app/student/module/module-1/page.tsx` - Module ledger.
- `src/app/student/lecture/lecture-2/page.tsx` - Lecture 02 flow.
- `src/app/student/submissions/page.tsx` - Record Room submissions ledger.
- `src/lib/student-data.ts` - typed mock phases, modules, lectures, evidence submissions, statuses, and lecture questions.
- `src/lib/student-progress.ts` - localStorage-backed MVP progress state.
- `src/components/student/StudentFrame.tsx` - shared student shell frame.
- `src/components/student/SequenceList.tsx` - locked/active/complete sequence rendering.
- `src/components/student/ArchitecturalPanel.tsx` - atmospheric panel component.
- `src/app/globals.css` - Tailwind layers and GRADIION global styling.
- `public/images/` - local atmospheric image assets.
- `CAPABILITY_INFRASTRUCTURE.md` - long-term GCP/GCS/Passport evidence architecture.
- `CAPABILITY_RUBRIC.md` - capability domain rubric map.
- `MOCK_DATA.md` - current mock data documentation.
- `QA_CHECKLIST.md` - route and behavior QA notes.
- `BUILD_LOG.md` - completed build stages.
- `TODO.md` - current and future task boundaries.

## Replit Setup

Use a Node.js Repl.

1. Upload or import the full project folder.
2. Open the Replit shell.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev -- --hostname 0.0.0.0
```

5. Open the Replit web preview and visit:

```text
/student
```

If Replit asks for a run command, use:

```bash
npm run dev -- --hostname 0.0.0.0
```

## Environment Variables

No environment variables are required for the current mock/local shell.

Use `.env.example` only as a placeholder for future backend work.

## Handoff Notes

- Do not add backend, auth, admin, payments, certificates, emails, real camera recording, uploads, AI avatar integration, Lecture 03, or new phases unless explicitly approved.
- Keep the five current routes stable before expanding scope.
- Treat meaningful student actions as capability evidence, following `CAPABILITY_INFRASTRUCTURE.md` and `CAPABILITY_RUBRIC.md`.
- The visual proof folders are historical QA artifacts and are not required to run the app.
