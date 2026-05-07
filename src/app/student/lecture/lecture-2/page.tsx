"use client";

import { useMemo, useState } from "react";
import { Rule } from "@/components/student/Rule";
import { SectionLabel } from "@/components/student/SectionLabel";
import { StudentFrame } from "@/components/student/StudentFrame";
import { lecture2DecisionQuestions, lecture2GcpPrompt, lectures } from "@/lib/student-data";
import { useStudentProgress } from "@/lib/student-progress";

const flowSteps = [
  {
    title: "Watch Video",
    action: "Acknowledge",
    copy: "Confirm the lecture has been watched.",
  },
  {
    title: "Terminology Pulse",
    action: "Review",
    copy: "Reinforce core terms before proceeding.",
  },
  {
    title: "Decision Check",
    action: "Answer",
    copy: "Complete the mock decision questions.",
  },
  {
    title: "GCP Video Response Drill",
    action: "Drill",
    copy: "Watch the prompt, then respond under a mock time window.",
  },
  {
    title: "Field Application Task",
    action: "Apply",
    copy: "Record the pressure, weakened behavior, and correction.",
  },
  {
    title: "Completion Gate",
    action: "Complete",
    copy: "Unlock only after all requirements are met.",
  },
];

export default function LecturePage() {
  const progress = useStudentProgress();
  const [activeStep, setActiveStep] = useState(flowSteps[0].title);
  const [videoWatched, setVideoWatched] = useState(false);
  const [terminologyReviewed, setTerminologyReviewed] = useState(false);
  const [decisionAnswers, setDecisionAnswers] = useState<Record<string, string>>({});
  const [gcpPromptWatched, setGcpPromptWatched] = useState(false);
  const [gcpRecording, setGcpRecording] = useState(false);
  const [gcpCaptured, setGcpCaptured] = useState(false);
  const [gcpNote, setGcpNote] = useState("");
  const [gcpSubmitted, setGcpSubmitted] = useState(false);
  const [fieldApplication, setFieldApplication] = useState({
    situation: "",
    pressure: "",
    weakeningBehavior: "",
    correction: "",
  });
  const [fieldApplicationSubmitted, setFieldApplicationSubmitted] = useState(false);
  const [lectureComplete, setLectureComplete] = useState(false);
  const lecture = lectures.find((item) => item.id === "lecture-2") ?? lectures[1];

  const decisionComplete = lecture2DecisionQuestions.every((question) => decisionAnswers[question.id]);
  const fieldApplicationReady = Object.values(fieldApplication).every((value) => value.trim().length > 0);
  const canComplete = videoWatched && terminologyReviewed && decisionComplete && gcpSubmitted && fieldApplicationSubmitted;

  const gateItems = useMemo(
    () => [
      { label: "Video watched", complete: videoWatched },
      { label: "Terminology reviewed", complete: terminologyReviewed },
      { label: "Decision Check completed", complete: decisionComplete },
      { label: "GCP video response submitted", complete: gcpSubmitted },
      { label: "Field Application submitted", complete: fieldApplicationSubmitted },
    ],
    [decisionComplete, fieldApplicationSubmitted, gcpSubmitted, terminologyReviewed, videoWatched],
  );

  function startGcpRecording() {
    if (gcpPromptWatched) {
      setGcpRecording(true);
      setGcpCaptured(false);
      setGcpSubmitted(false);
    }
  }

  function finishGcpRecording() {
    if (gcpRecording) {
      setGcpRecording(false);
      setGcpCaptured(true);
      setGcpSubmitted(false);
    }
  }

  function submitGcpVideoResponse() {
    if (gcpCaptured) {
      setGcpSubmitted(true);
    }
  }

  function updateFieldApplication(field: keyof typeof fieldApplication, value: string) {
    setFieldApplication((current) => ({ ...current, [field]: value }));
    setFieldApplicationSubmitted(false);
  }

  function submitFieldApplication() {
    if (fieldApplicationReady) {
      setFieldApplicationSubmitted(true);
    }
  }

  function requirementComplete(title: string) {
    if (title === "Watch Video") return videoWatched;
    if (title === "Terminology Pulse") return terminologyReviewed;
    if (title === "Decision Check") return decisionComplete;
    if (title === "GCP Video Response Drill") return gcpSubmitted;
    if (title === "Field Application Task") return fieldApplicationSubmitted;
    return canComplete;
  }

  return (
    <StudentFrame active="module" tone="light">
      <section className="student-lecture-flow grid flex-1 gap-4 py-4 sm:py-6 lg:grid-cols-[0.26fr_1.74fr] lg:gap-6 lg:py-6">
        <aside className="border-b bronze-rule pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
          <SectionLabel light>Reading Chamber</SectionLabel>
          <p className="font-serif text-base text-ink/75 sm:text-lg">Phase 1A - Module 1</p>
          <p className="mt-1.5 text-[13px] text-ink/68 sm:mt-2 sm:text-sm">Lecture {lecture.number}</p>
          <h1 className="mt-3 max-w-[20rem] font-serif text-[1.45rem] leading-[1.08] text-ink sm:mt-4 sm:text-4xl">
            {lecture.title === "Behavioral Friction Recognition" ? (
              <>
                Behavioral Friction
                <br className="sm:hidden" /> Recognition
              </>
            ) : (
              lecture.title
            )}
          </h1>
          <Rule className="my-4 hidden sm:my-5 sm:block" />
          <p className="hidden max-w-xs text-[13px] leading-6 text-ink/70 sm:block sm:text-base sm:leading-7">Understand how friction reveals instability under pressure.</p>
          <div className="mt-5 hidden sm:mt-6 sm:block">
            <SectionLabel light>Lecture Position</SectionLabel>
            <p className="mt-3 text-[9px] uppercase leading-5 tracking-[0.18em] text-ink/70 sm:mt-4 sm:text-[11px] sm:leading-6 sm:tracking-[0.28em]">Lecture 02 of 03</p>
          </div>
          <div className="mt-5 hidden border-t bronze-rule pt-4 sm:block">
            <SectionLabel light>Local State</SectionLabel>
            <p className="mt-3 text-[11px] uppercase leading-5 tracking-[0.16em] text-ink/60">Mock only. Refresh resets progress.</p>
          </div>
        </aside>
        <div className="min-w-0">
          <div className="lecture-window relative flex aspect-[16/6.8] min-h-36 items-center justify-center overflow-hidden border bronze-rule bg-ink shadow-[0_24px_70px_rgba(25,20,15,0.18)] sm:aspect-[16/4.9] sm:min-h-52">
            <div className="absolute inset-3 border border-ivory/10 sm:inset-5" />
            <button
              type="button"
              className="relative grid h-12 w-12 place-items-center rounded-full border border-bronze bg-obsidian/70 text-amber sm:h-20 sm:w-20"
              aria-label="Play lecture video"
            >
              <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-amber sm:border-y-[12px] sm:border-l-[18px]" />
            </button>
          </div>

          <div className="mt-4 border-y bronze-rule bg-[#eadfcb]/35 py-3">
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <SectionLabel light>Watch Video</SectionLabel>
                <p className="mt-1.5 text-[13px] leading-5 text-ink/70 sm:text-sm">Acknowledge the lecture before the gate can open.</p>
              </div>
              <button
                type="button"
                onClick={() => setVideoWatched(true)}
                className={`w-fit border px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] transition sm:text-[10px] ${
                  videoWatched ? "border-bronze/40 bg-bronze/15 text-bronze" : "border-bronze/60 bg-bronze/10 text-bronze hover:bg-bronze/15"
                }`}
              >
                {videoWatched ? "Lecture Watched" : "I have watched this lecture"}
              </button>
            </div>
          </div>

          <div className="mt-3 border-y bronze-rule bg-[#eadfcb]/35 py-2.5 sm:mt-4 sm:border sm:bg-[#eadfcb]/45 sm:px-3 sm:py-3 sm:shadow-[inset_0_0_70px_rgba(155,116,55,0.08)]">
            <SectionLabel light>Required Sequence</SectionLabel>
            <div className="mt-2 grid gap-1 sm:grid-cols-6 sm:gap-1.5">
            {flowSteps.map((step) => {
              const selected = activeStep === step.title;
              const complete = requirementComplete(step.title);

              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(step.title)}
                  className={`min-h-0 border border-transparent border-l bronze-rule px-2.5 py-1.5 text-left transition sm:px-3 sm:py-2 ${
                    selected ? "border-bronze/35 bg-bronze/10 shadow-[inset_0_0_50px_rgba(155,116,55,0.08)]" : "hover:bg-ink/5"
                  }`}
                >
                  <SectionLabel light>{step.title}</SectionLabel>
                  <p className="mt-1 hidden text-[11px] leading-4 text-ink/60 lg:block">{step.copy}</p>
                  <span className={`mt-1.5 inline-flex border-b pb-1 text-[8px] uppercase tracking-[0.12em] sm:text-[9px] ${complete ? "border-bronze/70 text-bronze" : "border-ink/20 text-ink/45"}`}>
                    {complete ? "Complete" : step.action}&nbsp;&nbsp;-
                  </span>
                </button>
              );
            })}
            </div>
          </div>

          <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 xl:grid-cols-[1fr_0.58fr]">
            <div className="grid gap-3 sm:gap-4">
              <section className="ledger-surface border bronze-rule p-3 shadow-[inset_0_0_80px_rgba(155,116,55,0.08)] sm:p-4">
                <SectionLabel light>Terminology Pulse</SectionLabel>
                <p className="mt-2 max-w-2xl text-[13px] leading-5 text-ink/70 sm:text-sm sm:leading-6">Confirm the key terms have been reviewed before proceeding.</p>
                <button
                  type="button"
                  onClick={() => setTerminologyReviewed(true)}
                  className={`mt-3 border px-4 py-2 text-[9px] uppercase tracking-[0.16em] transition ${
                    terminologyReviewed ? "border-bronze/40 bg-bronze/15 text-bronze" : "border-bronze/60 bg-bronze/10 text-bronze hover:bg-bronze/15"
                  }`}
                >
                  {terminologyReviewed ? "Terminology Reviewed" : "Mark Terminology Pulse Reviewed"}
                </button>
              </section>

              <section className="ledger-surface border bronze-rule p-3 shadow-[inset_0_0_80px_rgba(155,116,55,0.08)] sm:p-4">
                <SectionLabel light>Decision Check</SectionLabel>
                <div className="mt-2 grid gap-2 sm:mt-3 sm:gap-3">
                  {lecture2DecisionQuestions.map((question, index) => (
                    <fieldset key={question.id} className="border-t bronze-rule pt-2.5 sm:pt-3">
                      <legend className="font-serif text-[0.96rem] leading-snug text-ink sm:text-lg">
                        {index + 1}. {question.prompt}
                      </legend>
                      <div className="mt-2 grid gap-1 sm:grid-cols-3 sm:gap-1.5">
                        {question.options.map((option) => (
                          <label key={option} className="group flex cursor-pointer items-start gap-2 border-l bronze-rule px-2.5 py-1.5 text-[12px] leading-5 text-ink/72 transition hover:bg-bronze/10 sm:text-[13px]">
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={decisionAnswers[question.id] === option}
                              onChange={() => setDecisionAnswers((current) => ({ ...current, [question.id]: option }))}
                              className="mt-1.5 accent-[#9b7437]"
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  ))}
                </div>
                <p className={`mt-2.5 border-t bronze-rule pt-2.5 text-[10px] uppercase leading-5 tracking-[0.14em] ${decisionComplete ? "text-bronze" : "text-ink/45"}`}>
                  {decisionComplete ? "Decision Check complete." : "Answer all questions to complete this step."}
                </p>
              </section>

              <section className="ledger-surface border bronze-rule p-3 shadow-[inset_0_0_80px_rgba(155,116,55,0.08)] sm:p-4">
                <SectionLabel light>GCP Video Response Drill</SectionLabel>
                <p className="mt-2 max-w-2xl text-[13px] leading-5 text-ink/70 sm:text-sm sm:leading-6">
                  Watch the prompt. When it ends, respond without over-preparing.
                </p>

                <div className="lecture-window relative mt-3 flex aspect-[16/7.8] min-h-28 items-center justify-center overflow-hidden border bronze-rule bg-ink sm:aspect-[16/6.2] sm:min-h-36">
                  <div className="absolute inset-3 border border-ivory/10" />
                  <div className="relative text-center">
                    <p className="text-[9px] uppercase tracking-[0.24em] text-amber">GCP Prompt Video</p>
                    <p className="mt-1 font-serif text-lg leading-snug text-ivory sm:text-xl">Prompt</p>
                  </div>
                </div>

                <div className="mt-3 grid gap-3 border-y bronze-rule py-2.5 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <p className="font-serif text-base leading-snug text-ink sm:text-lg">Prompt</p>
                    <p className="mt-1 text-[12px] leading-5 text-ink/68 sm:text-[13px]">Acknowledge the prompt video before preparation opens.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setGcpPromptWatched(true);
                      setGcpSubmitted(false);
                    }}
                    className={`w-fit border px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] transition ${
                      gcpPromptWatched ? "border-bronze/40 bg-bronze/15 text-bronze" : "border-bronze/60 bg-bronze/10 text-bronze hover:bg-bronze/15"
                    }`}
                  >
                    {gcpPromptWatched ? "Prompt Watched" : "I Have Watched the Prompt"}
                  </button>
                </div>

                <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                  <div className="border-l bronze-rule px-3 py-2">
                    <p className="font-serif text-base leading-snug text-ink">Prepare your response.</p>
                    <p className={`mt-1 text-[10px] uppercase leading-5 tracking-[0.14em] ${gcpPromptWatched ? "text-bronze" : "text-ink/45"}`}>Preparation: 30 seconds</p>
                  </div>
                  <div className="border-l bronze-rule px-3 py-2">
                    <p className="font-serif text-base leading-snug text-ink">Response Window</p>
                    <p className={`mt-1 text-[10px] uppercase leading-5 tracking-[0.14em] ${gcpRecording ? "text-bronze" : "text-ink/55"}`}>
                      {gcpRecording ? "Recording in progress" : "Response Window: 90 seconds"}
                    </p>
                  </div>
                  <div className="flex flex-wrap content-start gap-2 border-l bronze-rule px-3 py-2">
                    <button
                      type="button"
                      onClick={startGcpRecording}
                      disabled={!gcpPromptWatched || gcpRecording}
                      className="border border-bronze/60 bg-bronze/10 px-3 py-2 text-[8px] uppercase tracking-[0.14em] text-bronze transition enabled:hover:bg-bronze/15 disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      Start Response Recording
                    </button>
                    <button
                      type="button"
                      onClick={finishGcpRecording}
                      disabled={!gcpRecording}
                      className="border border-bronze/60 bg-bronze/10 px-3 py-2 text-[8px] uppercase tracking-[0.14em] text-bronze transition enabled:hover:bg-bronze/15 disabled:cursor-not-allowed disabled:opacity-45"
                    >
                      Finish Recording
                    </button>
                  </div>
                </div>

                {gcpCaptured ? (
                  <p className="mt-2.5 border-t bronze-rule pt-2.5 text-[10px] uppercase leading-5 tracking-[0.14em] text-bronze">Response captured locally.</p>
                ) : null}

                <div className="mt-3 grid gap-3 border-t bronze-rule pt-3 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                  <label className="block text-[10px] uppercase leading-5 tracking-[0.14em] text-ink/55" htmlFor="gcp-note">
                    Optional written note
                  </label>
                  <textarea
                    id="gcp-note"
                    value={gcpNote}
                    onChange={(event) => setGcpNote(event.target.value)}
                    rows={2}
                    className="mt-1.5 w-full resize-none border bronze-rule bg-[#eee4d2]/70 p-2.5 font-serif text-sm leading-5 text-ink shadow-[inset_0_0_50px_rgba(155,116,55,0.08)] outline-none placeholder:text-ink/35 focus:border-bronze"
                    placeholder={lecture2GcpPrompt}
                  />
                  <p className="mt-1.5 text-[10px] uppercase leading-5 tracking-[0.14em] text-ink/55">Mock/local only. No camera, upload, or backend storage yet.</p>
                  </div>
                  <button
                    type="button"
                    onClick={submitGcpVideoResponse}
                    disabled={!gcpCaptured || gcpSubmitted}
                    className="w-fit border border-bronze/60 bg-bronze/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.16em] text-bronze transition enabled:hover:bg-bronze/15 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {gcpSubmitted ? "GCP Video Response Submitted" : "Submit GCP Video Response"}
                  </button>
                </div>
                <p className={`mt-2.5 border-t bronze-rule pt-2.5 text-[10px] uppercase leading-5 tracking-[0.14em] ${gcpSubmitted ? "text-bronze" : "text-ink/45"}`}>
                  {gcpSubmitted ? "GCP video response submitted locally." : "Submit the captured response to satisfy the gate."}
                </p>
              </section>

              <section className="ledger-surface border bronze-rule p-3 shadow-[inset_0_0_80px_rgba(155,116,55,0.08)] sm:p-4">
                <SectionLabel light>Field Application Task</SectionLabel>
                <p className="mt-2 max-w-2xl text-[13px] leading-5 text-ink/70 sm:text-sm sm:leading-6">
                  Identify one real situation where this friction pattern appears. Define the pressure, the behavior that weakens, and the correction you will apply.
                </p>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {[
                    ["situation", "Situation", "Where will this pattern appear?"],
                    ["pressure", "Pressure", "What pressure is present?"],
                    ["weakeningBehavior", "Weakening Behavior", "What behavior tends to weaken?"],
                    ["correction", "Correction", "What correction will you apply?"],
                  ].map(([field, label, placeholder]) => (
                    <label key={field} className="border-l bronze-rule px-3 py-2">
                      <span className="block text-[10px] uppercase leading-5 tracking-[0.14em] text-ink/55">{label}</span>
                      <textarea
                        value={fieldApplication[field as keyof typeof fieldApplication]}
                        onChange={(event) => updateFieldApplication(field as keyof typeof fieldApplication, event.target.value)}
                        rows={2}
                        className="mt-1.5 w-full resize-none border bronze-rule bg-[#eee4d2]/70 p-2.5 font-serif text-sm leading-5 text-ink shadow-[inset_0_0_50px_rgba(155,116,55,0.08)] outline-none placeholder:text-ink/35 focus:border-bronze"
                        placeholder={placeholder}
                      />
                    </label>
                  ))}
                </div>
                <div className="mt-3 flex flex-col gap-2 border-t bronze-rule pt-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className={`text-[10px] uppercase leading-5 tracking-[0.14em] ${fieldApplicationSubmitted ? "text-bronze" : "text-ink/45"}`}>
                    {fieldApplicationSubmitted ? "Field Application submitted locally." : "Complete all fields to submit the application record."}
                  </p>
                  <button
                    type="button"
                    onClick={submitFieldApplication}
                    disabled={!fieldApplicationReady || fieldApplicationSubmitted}
                    className="w-fit border border-bronze/60 bg-bronze/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.16em] text-bronze transition enabled:hover:bg-bronze/15 disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Submit Field Application
                  </button>
                </div>
              </section>
            </div>

            <aside className="border bronze-rule bg-[#19140f] p-3.5 text-ivory shadow-[inset_0_0_90px_rgba(155,116,55,0.16)] sm:p-4 xl:sticky xl:top-6 xl:self-start">
              <SectionLabel light>Completion Gate</SectionLabel>
              <div className="mt-3 divide-y bronze-rule border-y bronze-rule">
                {gateItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-1 py-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-sm leading-5 text-ivory/76">{item.label}</span>
                    <span className={`text-[8px] uppercase tracking-[0.18em] ${item.complete ? "text-amber" : "text-ivory/38"}`}>
                      {item.complete ? "Complete" : "Incomplete"}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 break-words text-[13px] leading-6 text-ivory/68 sm:mt-4 sm:text-sm sm:leading-7">
                {canComplete ? "All requirements are complete. The lecture can now be closed." : "Completion remains locked until every requirement is satisfied."}
              </p>
              <button
                type="button"
                disabled={!canComplete || lectureComplete}
                onClick={() => {
                  setLectureComplete(true);
                  progress.completeLecture2();
                }}
                className="mt-3 w-full border border-bronze/70 bg-bronze/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-amber transition enabled:hover:bg-bronze/15 disabled:cursor-not-allowed disabled:opacity-45 sm:mt-4 sm:py-3"
              >
                {lectureComplete ? "Lecture Complete" : "Complete Lecture"}
              </button>
              {lectureComplete ? (
                <p className="mt-4 border-t bronze-rule pt-4 font-serif text-base leading-6 text-ivory">Lecture 02 complete. Lecture 03 is now available in mock state.</p>
              ) : null}
            </aside>
          </div>
        </div>
      </section>
    </StudentFrame>
  );
}
