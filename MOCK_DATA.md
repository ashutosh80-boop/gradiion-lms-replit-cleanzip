# MOCK DATA

Current mock data lives in `src/lib/student-data.ts`.

No backend, database, authentication, admin system, payments, certificates, or email system exists yet.

## Status

### Values

- `complete`
- `active`
- `locked`
- `pending-review`
- `approved`
- `correction-required`
- `resubmitted`

### Represents

The current UI state for phases, lectures, and submissions.

### Appears In

- Phase sequence
- Module lecture sequence
- Submissions table
- Current student state

### Later Backend Replacement

Replace with persisted status values from the database. Status rules should eventually be enforced server-side.

## Phases

### Mock Items

- Phase 1A - Collapse Awareness - Active
- Phase 1B - Behavioral Correction and Application - Locked
- Capstone Exam - Behavioral Integrity Under Pressure - Locked

### Represents

The student's structured phase access path.

### Appears In

- `/student`
- `/student/phase/phase-1a`

### Later Backend Replacement

Replace with phase records, access rules, unlock conditions, ordering, and student-specific availability.

## Modules

### Mock Items

- Module 1 - Hidden Collapse Patterns - Active

### Represents

The active module inside Phase 1A.

### Appears In

- `/student`
- `/student/module/module-1`
- `/student/lecture/lecture-2`

### Later Backend Replacement

Replace with module records tied to phases, lecture sequences, completion rules, and student progress.

## Lectures

### Mock Items

- Lecture 01 - Systemic Blind Spots - Complete
- Lecture 02 - Behavioral Friction Recognition - Active
- Lecture 03 - Collapse Triggers - Locked

### Represents

The ordered lecture sequence for Phase 1A / Module 1.

### Appears In

- `/student`
- `/student/module/module-1`
- `/student/lecture/lecture-2`

### Later Backend Replacement

Replace with lecture records, media records, completion state, lock rules, and required flow completion state.

## Submissions

### Mock Items

- GCP Prompt - Pending Review
- Decision Check - Approved
- Reflection - Approved

### Represents

Student submission rows in the Record Room.

### Appears In

- `/student/submissions`

### Later Backend Replacement

Replace with student-specific submission records, review status, reviewer notes, timestamps, and linked lecture/module context.

## Current Student State

### Mock Values

- Current requirement: complete the active lecture flow before the next section opens.
- Current location: Phase 1A / Module 1 / Lecture 02.
- Active lecture ID: `lecture-2`.

### Represents

The student's current command state on the home page.

### Appears In

- `/student`

### Later Backend Replacement

Replace with authenticated student progress, active enrollment, current unlock state, and the next required action.

## Stage 3 Flow Notes

The student flow still uses mock/local data only. No database writes, server persistence, authentication state, admin tools, payments, certificates, or email behavior exist.

### Current Requirement

- Current location: Phase 1A / Module 1 / Lecture 02.
- Current requirement: Complete the active lecture flow.
- Primary CTA href: `/student/lecture/lecture-2`.

### Route Hrefs In Mock Data

- Phase 1A is active and routes to `/student/phase/phase-1a` from Student Home.
- Module 1 is active and routes to `/student/module/module-1`.
- Lecture 01 is complete and routes to `/student/module/module-1` until a dedicated completed lecture route exists.
- Lecture 02 is active and routes to `/student/lecture/lecture-2`.
- Phase 1B, Capstone Exam, and Lecture 03 are locked and intentionally have no href.

### Lock Rule

`SequenceList` calls `getAccessibleHref(status, href)` so locked rows never navigate, even if future mock data accidentally includes an href.

### Later Backend Replacement

Replace these href/status decisions with student-specific access rules from the backend. Locked-state enforcement should eventually happen server-side as well as in the UI.

## Stage 4 Lecture Completion Notes

Lecture 02 completion uses React local component state only. Refreshing the page resets the completion flow.

### Mock Completion Requirements

- Watch Video: student must acknowledge `I have watched this lecture`.
- Terminology Pulse: student must mark terminology reviewed.
- Decision Check: student must answer all mock MCQ questions.
- GCP Submission: student must enter and submit a local text response.
- Completion Gate: Complete Lecture stays disabled until all four requirements are complete.

### Mock Data Added

- `lecture2DecisionQuestions`: three simple mock MCQ prompts.
- `lecture2GcpPrompt`: `Where does this friction pattern appear in your own behavior under pressure?`

### Not Persisted Yet

- Video acknowledgement.
- Terminology reviewed state.
- Decision Check answers.
- GCP response text.
- Lecture complete state.
- Mock Lecture 03 availability message.

### Later Backend Replacement

Replace local component state with student-specific persisted progress, submission records, validation rules, and server-enforced completion gates.

## Stage 5 Mock Submission Behavior Notes

Decision Check and GCP Submission still use mock/local state only. No answer, response, review status, or lecture completion result is saved to a backend yet. Refreshing the lecture page resets the in-progress answers, GCP response, submitted state, and completion gate.

### Decision Check

- Uses the three mock MCQs from `lecture2DecisionQuestions`.
- Student must select one answer for each question.
- When all questions have an answer, the page shows `Decision Check complete.`.
- Completion is not graded or scored yet.
- The Completion Gate reads this local state only.

### GCP Submission

- Uses `lecture2GcpPrompt`.
- Student must type a response before `Submit GCP Response` can be used.
- Empty local responses cannot be submitted.
- After local submission, the page shows `GCP response submitted locally.`.
- Editing the response resets the local submitted state until it is submitted again.

### Submissions Page

The Record Room still displays fixed mock rows:

- GCP Prompt - Pending Review
- Decision Check - Approved
- Reflection - Approved

### Later Backend Replacement

Replace the local Decision Check answers and GCP response with persisted student submissions, review records, validation, timestamps, and server-enforced completion rules.

## Stage 6 GCP Video Response Drill Notes

Lecture 02 now uses a mock/local GCP Video Response Drill instead of requiring the old text-only GCP response. This is still a launch MVP simulation. It does not access the camera, record media, upload files, or store anything in a backend.

### Mock Drill State

- Prompt watched: student clicks `I Have Watched the Prompt`.
- Preparation: page shows `Prepare your response.` and `Preparation: 30 seconds`.
- Mock recording: student clicks `Start Response Recording`, then the page shows `Recording in progress` and `Response Window: 90 seconds`.
- Capture: student clicks `Finish Recording`, then the page shows `Response captured locally.`.
- Submission: student clicks `Submit GCP Video Response`, then the page shows `GCP video response submitted locally.`.

### Completion Gate

The Completion Gate now requires:

- Video watched.
- Terminology reviewed.
- Decision Check completed.
- GCP video response submitted.

### Optional Text Fallback

The `Optional written note` field is local-only and does not replace the required mock video response drill.

### Later Backend Replacement

Future stages should add browser camera recording, file handling, upload storage, submission records, review state, and server-enforced completion rules only after backend and permission work is approved.

## Stage 7 Field Application Task Notes

Lecture 02 now includes a mock/local Field Application Task after the GCP Video Response Drill and before the Completion Gate. The task is intended to document applied capability in a real-world pressure situation.

### Mock Fields

- Situation: `Where will this pattern appear?`
- Pressure: `What pressure is present?`
- Weakening Behavior: `What behavior tends to weaken?`
- Correction: `What correction will you apply?`

### Mock Submission Rule

- All four fields must contain text before `Submit Field Application` is enabled.
- After local submission, the page shows `Field Application submitted locally.`.
- Editing any field resets the local submitted state until submitted again.
- Refreshing the page resets all Field Application state.

### Completion Gate

The Completion Gate now requires:

- Video watched.
- Terminology reviewed.
- Decision Check completed.
- GCP video response submitted.
- Field Application submitted.

### Later Backend Replacement

Replace this local state with persisted application records, timestamps, review status, reviewer feedback, and server-enforced completion rules when backend work is approved.

## Stage 8 Local Progress State Notes

Lecture 02 completion now writes to browser `localStorage` through `src/lib/student-progress.ts`. This is MVP persistence only and is not backend storage.

### Local Storage Key

- `gradiion.studentProgress.v1`

### Default Local Progress

- Lecture 01: Complete.
- Lecture 02: Active.
- Lecture 03: Locked.
- Module 1 progress: 1 of 3 lectures completed.
- Student Home current location: Phase 1A / Module 1 / Lecture 02.

### After Lecture 02 Completion

- Lecture 02 becomes Complete.
- Lecture 03 becomes Active in local state.
- Module 1 progress becomes 2 of 3 lectures completed.
- Student Home current location becomes Phase 1A / Module 1 / Lecture 03.
- Student Home shows `Lecture 03 pending route` because `/student/lecture/lecture-3` has not been approved or created.
- Record Room adds local mock rows for:
  - GCP Video Response - Lecture 2 - Pending Review - Local Session.
  - Field Application - Lecture 2 - Pending Review - Local Session.

### Reset Control

`Reset Local Progress` clears the local storage key and returns the shell to default local progress.

### Later Backend Replacement

Replace localStorage progress with authenticated student progress, persisted lecture completion, server-enforced locks, stored submissions, review status, and audit timestamps when backend work is approved.

## Stage 9 Correction Required Status Notes

The submission system now supports mock/local correction states. This is not connected to an admin review backend.

### Status Labels

- Pending Review.
- Approved.
- Correction Required.
- Resubmitted.

### Local Lecture 2 Records

After local Lecture 02 completion:

- GCP Video Response - Lecture 2: Pending Review.
- Field Application - Lecture 2: Correction Required.

### Correction Note

Rows with Correction Required show:

`Correction required before this record can be approved.`

### Later Backend Replacement

Future stages should add admin review decisions, reviewer notes, resubmission rules, audit timestamps, and persistent student submission status. The `resubmitted` status exists now only as a mock type and label.

## Stage 12 Evidence Metadata Notes

Mock submissions now represent capability evidence records, not only ledger rows. This prepares the future GCP, GCS, and Capability Passport infrastructure while remaining mock/local only.

### Metadata Added

Each mock submission now includes:

- evidence type
- capability domains
- phase
- module
- lecture
- prompt/question
- status
- date
- verification status
- correction note where applicable
- failure tags where applicable

### Evidence Type Mapping

- GCP Prompt - Lecture 1: GCP Written Response; Clarity, Decision-Making, Execution.
- Decision Check - Lecture 1: Decision Check; Clarity, Decision-Making, Composure.
- Reflection - Lecture 1: GCP Written Response; Clarity, Communication.
- GCP Video Response - Lecture 2: GCP Video Response; Clarity, Communication, Professional Presence, Composure.
- Field Application - Lecture 2: Field Application; Execution, Decision-Making, Clarity.

### Correction Required Metadata

Field Application - Lecture 2 uses:

- status: Correction Required.
- correction note: `Correction required before this record can be approved.`
- failure tags: `execution vagueness`, `no evidence`.
- verification status: Unverified.

### Verification Status

- Pending Review records are Unverified.
- Approved records are Accepted.
- Correction Required records are Unverified.
- Verified is reserved for later review infrastructure.

### Later Backend Replacement

Replace this metadata with persisted evidence records, student IDs, response or file references, reviewer notes, AI review notes, resubmission history, verification timestamps, and server-enforced review status when backend work is approved.
