# TODO

## Student MVP

- Keep the current five student-facing routes stable:
  - `/student`
  - `/student/phase/phase-1a`
  - `/student/module/module-1`
  - `/student/lecture/lecture-2`
  - `/student/submissions`
- Verify the real Next app once `npm` is available.
- Replace the temporary preview server with the real development server workflow.
- Confirm all active links point only to implemented routes.
- Keep locked phases, lectures, and future paths non-clickable until their routes exist.
- Preserve the minimal student experience with no community, gamification, badges, or dashboard-style clutter.

## Visual Polish

- Increase fidelity to the GRADIION design board.
- Strengthen old-world institutional architecture and cinematic depth.
- Improve dark bronze/black command spaces.
- Improve ivory sandstone reading spaces.
- Refine thin bronze rule lines, negative space, and serif-led hierarchy.
- Improve mobile navigation without adding SaaS-style chrome.
- Refine the mobile submissions layout so it feels more institutional and less table-heavy.

## Backend Later

- Do not build backend yet.
- Later, replace mock phases, modules, lectures, submissions, and current student state with database-backed data.
- Later, persist lecture completion, phase access, review statuses, and submission records.

## Auth Later

- Do not build authentication yet.
- Later, add student login/session handling.
- Later, connect student identity to progress and submissions.

## Admin Later

- Do not build admin yet.
- Later, add tools for managing phases, modules, lectures, submissions, and reviews.

## Payments Later

- Do not build payments yet.
- Payments are out of scope for the current student MVP shell.

## Certificates Later

- Do not build certificates yet.
- Later, determine certificate rules only after completion and assessment workflows exist.

## Email Later

- Do not build emails yet.
- Later, add notification workflows only after backend, auth, and review systems exist.

## Stage 3 Status

- [x] Stage 3 student flow logic complete with mock/local data.
- [x] Active and complete rows can use valid route targets.
- [x] Locked rows are non-clickable and route-less.
- [ ] Add dedicated completed lecture routes later if approved.
- [ ] Backend, auth, admin, payments, certificates, and emails remain intentionally out of scope.

## Stage 4 Status

- [x] Lecture 02 completion flow added with mock/local state.
- [x] Video acknowledgement required.
- [x] Terminology Pulse review required.
- [x] Decision Check mock MCQs required.
- [x] GCP text response required.
- [x] Completion Gate blocks completion until all requirements are complete.
- [ ] Persist lecture completion later only when backend/local persistence is approved.
- [ ] Backend, auth, admin, payments, certificates, and emails remain intentionally out of scope.

## Stage 5 Status

- [x] Decision Check answers update local state.
- [x] Decision Check shows completion after all three mock MCQs are answered.
- [x] GCP empty response cannot be submitted.
- [x] GCP filled response can be submitted locally.
- [x] GCP shows local submission confirmation.
- [x] Completion Gate reads live local state for video, terminology, Decision Check, and GCP.
- [ ] Persist Decision Check answers and GCP response later only when backend work is approved.
- [ ] Backend, auth, admin, payments, certificates, and emails remain intentionally out of scope.

## Stage 6 Status

- [x] Replace required text-only GCP step with mock GCP Video Response Drill.
- [x] Add prompt video placeholder and watched acknowledgement.
- [x] Add preparation state with mock `Preparation: 30 seconds` display.
- [x] Add mock recording state with `Response Window: 90 seconds`.
- [x] Add local captured and submitted states.
- [x] Update Completion Gate requirement to `GCP video response submitted`.
- [x] Keep optional written note as fallback context only.
- [ ] Add real browser camera recording later only after explicit approval.
- [ ] Add file upload, storage, backend persistence, and review workflow later only after explicit approval.
- [ ] Backend, auth, admin, payments, certificates, and emails remain intentionally out of scope.

## Stage 7 Status

- [x] Add Field Application Task to Lecture 02 completion flow.
- [x] Require Situation, Pressure, Weakening Behavior, and Correction fields.
- [x] Block Field Application submission until all four fields are complete.
- [x] Update Completion Gate to require Field Application submitted.
- [x] Keep Field Application local/mock only.
- [ ] Persist Field Application records later only when backend work is approved.
- [ ] Backend, auth, admin, payments, certificates, emails, real camera, upload, and new phases remain intentionally out of scope.

## Stage 8 Status

- [x] Add localStorage-backed MVP progress state.
- [x] Persist Lecture 02 completion locally after Complete Lecture.
- [x] Update Student Home current requirement to Lecture 03 after local completion.
- [x] Update Module Ledger to show Lecture 02 Complete and Lecture 03 Active after local completion.
- [x] Update module progress from 1 of 3 to 2 of 3 after local completion.
- [x] Add subtle Reset Local Progress control.
- [x] Add local mock Lecture 2 submission records after local completion.
- [ ] Add real backend persistence later only when approved.
- [ ] Create Lecture 03 route later only when approved.

## Stage 9 Status

- [x] Add `Correction Required` and `Resubmitted` status support.
- [x] Show Field Application - Lecture 2 as Correction Required after local Lecture 02 completion.
- [x] Show restrained correction note in the Record Room.
- [x] Keep resubmission workflow out of scope.
- [ ] Add real admin review backend later only when approved.
- [ ] Add resubmission workflow later only when approved.

## Stage 10 Architecture Tasks

- [x] Create `CAPABILITY_INFRASTRUCTURE.md`.
- [x] Create Capability Rubric Map across the six domains.
- [ ] Define Instant GCP Response Mode.
- [ ] Define Scenario Judgment Drill structure.
- [ ] Define Field Execution Report structure.
- [ ] Define Correction + Resubmission Workflow.
- [ ] Define Evidence-Based GCP Profile structure.
- [ ] Define AI Marking Mock boundaries.
- [ ] Define Baseline Diagnostic.
- [ ] Define Orientation Gate.
- [ ] Define Capstone Proof Structure.
- [ ] Plan backend only after capability evidence structures are mapped.

## Stage 11 Architecture Tasks

- [x] Create `CAPABILITY_RUBRIC.md`.
- [x] Align mock submissions to evidence types.
- [x] Add capability domain metadata to mock data.
- [ ] Add failure tags to mock review output later.
- [ ] Build Evidence-Based GCP Profile after correction/resubmission workflow.
- [ ] Build AI Marking Mock only after rubric exists.

## Stage 12 Evidence Metadata Tasks

- [x] Treat mock submissions as capability evidence records.
- [x] Add evidence type, capability domains, phase, module, lecture, prompt, verification status, correction note, and failure tags where applicable.
- [x] Display Evidence Type and Capability Domains in the Record Room ledger without adding SaaS-style clutter.
- [x] Preserve Correction Required note for Field Application - Lecture 2.
- [ ] Add richer mock review output and failure tags later only after the correction/resubmission workflow is approved.
- [ ] Build the Evidence-Based GCP Profile only after evidence metadata and review workflow are stable.
- [ ] Backend persistence, AI marking, auth, admin, payments, certificates, emails, real camera, upload, AI avatar integration, Lecture 03 route, and new phases remain intentionally out of scope.
