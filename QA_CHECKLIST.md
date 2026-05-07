# QA CHECKLIST

## Current Known Status

- [x] All five required routes return `200` locally.
- [x] No hard `404` route links found among the required routes.
- [x] Phase 1A link fixed from Student Home.
- [x] Locked routes/items remain non-clickable.
- [x] Project-local chamber image assets resolve through the temporary preview server.
- [x] Visual Correction Pass 1 desktop and mobile screenshots generated.
- [x] Layout + Mobile Correction Pass 2 desktop and mobile screenshots generated.
- [x] Pass 2 mobile text clipping and table overflow corrected.
- [x] Final Shell Tightening Pass desktop and mobile screenshots generated.
- [x] Pass 3 proof folder contains only screenshots and `QA_SUMMARY.md`.
- [x] Mobile-Only Correction Pass 1 screenshots generated.
- [x] Mobile heading, spacing, panel height, and row compactness corrected.
- [x] Stage 3 Student Flow Logic checked.
- [x] Locked Phase 1B, Capstone Exam, and Lecture 03 remain non-clickable.
- [x] Active/current CTAs route to the approved five-route shell.
- [ ] Real Next build verified with `npm install` and `npm run dev`.

## `/student` - Command Chamber

- [x] Route loads.
- [x] Links work.
- [x] Desktop layout checked.
- [x] Mobile layout checked.
- [ ] Visual fidelity to GRADIION design board fully approved after Final Shell Tightening Pass screenshots.
- [x] No SaaS dashboard drift.
- [x] No unnecessary icons/progress bars/badges.
- [x] Readable typography.
- [x] Correct chamber identity.
- [x] No broken images/assets.

## `/student/phase/phase-1a` - Access Hall

- [x] Route loads.
- [x] Links work.
- [x] Desktop layout checked.
- [x] Mobile layout checked.
- [ ] Visual fidelity to GRADIION design board fully approved after Final Shell Tightening Pass screenshots.
- [x] No SaaS dashboard drift.
- [x] No unnecessary icons/progress bars/badges.
- [x] Readable typography.
- [x] Correct chamber identity.
- [x] No broken images/assets.

## `/student/module/module-1` - Module Ledger

- [x] Route loads.
- [x] Links work.
- [x] Desktop layout checked.
- [x] Mobile layout checked.
- [ ] Visual fidelity to GRADIION design board fully approved after Final Shell Tightening Pass screenshots.
- [x] No SaaS dashboard drift.
- [x] No unnecessary icons/progress bars/badges.
- [x] Readable typography.
- [x] Correct chamber identity.
- [x] No broken images/assets.

## `/student/lecture/lecture-2` - Reading Chamber

- [x] Route loads.
- [x] Links work.
- [x] Desktop layout checked.
- [x] Mobile layout checked.
- [ ] Visual fidelity to GRADIION design board fully approved after Final Shell Tightening Pass screenshots.
- [x] No SaaS dashboard drift.
- [x] No unnecessary icons/progress bars/badges.
- [x] Readable typography.
- [x] Correct chamber identity.
- [x] No broken images/assets.

## `/student/submissions` - Record Room

- [x] Route loads.
- [x] Links work.
- [x] Desktop layout checked.
- [x] Mobile layout checked.
- [ ] Visual fidelity to GRADIION design board fully approved after Final Shell Tightening Pass screenshots.
- [x] No SaaS dashboard drift.
- [x] No unnecessary icons/progress bars/badges.
- [x] Readable typography.
- [x] Correct chamber identity.
- [x] No broken images/assets.

## Notes

- Backend, auth, admin, payments, certificates, and emails are intentionally out of scope.
- The current route status was verified against the temporary local preview server.
- The real Next app still needs verification once `npm` is available.
- Visual Correction Pass 1 added image-backed chamber panels without changing route structure or adding LMS features.

## Pass 2 Notes

- Desktop and mobile screenshots are available in isual-proof-pass-2.
- Backend, auth, admin, payments, certificates, and emails remain untouched.
- The five required routes were rechecked locally and returned 200.



## Pass 3 Notes

- Desktop and mobile screenshots are available in `visual-proof-pass-3`.
- Backend, auth, admin, payments, certificates, and emails remain untouched.
- The five required routes were rechecked locally and returned `200`.


## Mobile Pass 1 Notes

- Mobile screenshots are available in `visual-proof-mobile-pass-1`.
- Backend, auth, admin, payments, certificates, and emails remain untouched.
- The five required routes were rechecked locally and returned `200`.


## Stage 3 Flow Notes

- Current active requirement is `Phase 1A / Module 1 / Lecture 02`.
- Student Home, Phase Page, Module Page, Lecture Page, and Submissions Page returned `200` locally.
- Backend, auth, admin, payments, certificates, and emails remain untouched.

## Stage 4 Lecture Completion Notes

- [x] `/student/lecture/lecture-2` loads locally.
- [x] Other four required student routes still return `200`.
- [x] Video acknowledgement is required before completion.
- [x] Terminology Pulse review is required before completion.
- [x] Decision Check requires all mock questions to be answered.
- [x] GCP response requires local text before submission.
- [x] Complete Lecture button is disabled until all requirements are complete.
- [x] Completion message appears after local completion.
- [x] Mobile lecture layout remains readable in proof screenshot.
- [x] Backend, auth, admin, payments, certificates, and emails remain untouched.


## Stage 4 Lecture Visual Repair Notes

- [x] `/student/lecture/lecture-2` visual repair checked locally.
- [x] Other four student routes still return `200` locally.
- [x] Completion logic still exists in source after visual repair.
- [x] Mobile proof shows full lecture flow in the required order.
- [x] Completion Gate no longer presents as a plain checklist box.
- [x] Backend, auth, admin, payments, certificates, and emails remain untouched.

## Stage 4 Final Lecture Polish Notes

- [x] `/student/lecture/lecture-2` final polish checked locally.
- [x] Core completion logic remains intact.
- [x] Mobile viewport screenshot captured at `390x844`.
- [x] Mobile full-page screenshot captured for scroll-flow review.
- [x] Viewport contact sheet is the visual approval artifact.
- [x] Full-page contact sheet is preserved at readable size and not compressed into a tiny strip.
- [x] Backend, auth, admin, payments, certificates, emails, and new phases remain untouched.

## Stage 5 Mock Submission Behavior Notes

- [x] `/student/lecture/lecture-2` loads locally.
- [x] `/student/submissions` loads locally.
- [x] Incomplete Completion Gate blocks lecture completion.
- [x] Decision Check requires all three mock MCQs to be answered.
- [x] Decision Check displays `Decision Check complete.` when all mock answers are selected.
- [x] GCP empty response cannot be submitted.
- [x] GCP filled response can be submitted locally.
- [x] GCP displays `GCP response submitted locally.` after local submission.
- [x] Completion Gate updates from video, terminology, Decision Check, and GCP local state.
- [x] Complete Lecture remains disabled until all four requirements are complete.
- [x] Record Room still shows GCP Prompt - Pending Review, Decision Check - Approved, and Reflection - Approved.
- [x] Backend, auth, admin, payments, certificates, emails, and new phases remain untouched.

## Stage 5 Submissions Page Repair Notes

- [x] `/student/submissions` loads locally.
- [x] Desktop displays Submission, Module / Lecture, Status, and Date.
- [x] Mobile displays each submission title, module / lecture, status, and date.
- [x] Mobile ledger rows remain compact and readable.
- [x] No horizontal overflow observed in proof capture.
- [x] No backend, persistence, auth, admin, payments, certificates, emails, or new phases were added.

## Stage 6 GCP Video Response Drill MVP Notes

- [x] `/student/lecture/lecture-2` loads locally.
- [x] GCP step is now labeled `GCP Video Response Drill`.
- [x] Prompt watched state opens the preparation state.
- [x] Mock recording state shows `Recording in progress`.
- [x] Finish Recording creates a local captured response state.
- [x] Submit GCP Video Response marks the GCP video response submitted locally.
- [x] Completion Gate now requires `GCP video response submitted`.
- [x] Complete Lecture remains disabled until video, terminology, Decision Check, and GCP video response are complete.
- [x] Mobile lecture layout remains readable in proof capture.
- [x] No real camera recording, file upload, backend storage, auth, admin, payments, certificates, emails, or new phases were added.

## Stage 6 Lecture Flow Compression Notes

- [x] `/student/lecture/lecture-2` loads locally after compression.
- [x] Required Sequence guide is more compact and still shows all five steps.
- [x] Watch Video action remains present.
- [x] Terminology Pulse action remains present.
- [x] Decision Check still includes all three mock MCQs.
- [x] GCP Video Response Drill still includes prompt video, prompt acknowledgement, preparation, mock recording, finish recording, submit response, and optional written note.
- [x] Completion Gate still shows all four requirements.
- [x] Complete Lecture remains disabled until all required local states are complete.
- [x] Mobile proof captures show reduced vertical weight with no horizontal overflow observed.
- [x] Backend, auth, admin, payments, certificates, emails, real camera, upload, and new phases remain untouched.

## Stage 7 Field Application Task Notes

- [x] `/student/lecture/lecture-2` loads locally.
- [x] Required Sequence includes Field Application Task.
- [x] Field Application Task appears after GCP Video Response Drill and before Completion Gate.
- [x] Situation, Pressure, Weakening Behavior, and Correction fields are present.
- [x] Submit Field Application is blocked until all four fields are complete.
- [x] Field Application submitted updates the Completion Gate requirement in source.
- [x] Complete Lecture remains disabled until all five requirements are complete.
- [x] All five student routes still return `200` locally.
- [x] Backend, auth, admin, payments, certificates, emails, real camera, upload, and new phases remain untouched.

## Stage 8 Local Progress State Notes

- [x] `/student` loads locally.
- [x] `/student/module/module-1` loads locally.
- [x] `/student/lecture/lecture-2` loads locally.
- [x] Completing Lecture 02 writes local MVP progress state.
- [x] Student Home updates to Lecture 03 after local completion.
- [x] Module Page updates Lecture 02 to Complete after local completion.
- [x] Module Page updates Lecture 03 to Active after local completion.
- [x] Module progress updates from 1 of 3 to 2 of 3 lectures completed.
- [x] Reset Local Progress restores Lecture 01 Complete, Lecture 02 Active, and Lecture 03 Locked.
- [x] All five student routes still return `200` locally.
- [x] Backend, auth, admin, payments, certificates, emails, real camera, upload, AI avatar integration, and new phases remain untouched.

## Stage 9 Correction Required Status Notes

- [x] `/student/submissions` loads locally.
- [x] Pending Review renders in the Record Room.
- [x] Approved renders in the Record Room.
- [x] Correction Required renders in the Record Room after local Lecture 02 completion.
- [x] Correction Required row shows the restrained correction note.
- [x] Resubmitted status type and label exist for later workflow.
- [x] Mobile ledger remains readable in proof capture.
- [x] All five student routes still return `200` locally.
- [x] Backend, auth, admin, payments, certificates, emails, real camera, upload, AI avatar integration, and new phases remain untouched.

## Stage 12 Evidence Metadata Notes

- [x] `/student/submissions` loads locally.
- [x] Evidence Type renders in the Record Room ledger.
- [x] Capability Domains render in the Record Room ledger.
- [x] Correction Required row still shows the restrained correction note.
- [x] Desktop ledger remains readable after metadata was added.
- [x] Mobile ledger remains readable after metadata was added.
- [x] All five student routes still return `200` locally.
- [x] Backend, auth, admin, payments, certificates, emails, real camera, upload, AI avatar integration, Lecture 03 route, and new phases remain untouched.
