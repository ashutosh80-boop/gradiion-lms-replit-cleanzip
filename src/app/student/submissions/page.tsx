"use client";

import { Rule } from "@/components/student/Rule";
import { SectionLabel } from "@/components/student/SectionLabel";
import { StudentFrame } from "@/components/student/StudentFrame";
import { ArchitecturalPanel } from "@/components/student/ArchitecturalPanel";
import { formatStatus } from "@/lib/student-data";
import { useStudentProgress } from "@/lib/student-progress";

export default function SubmissionsPage() {
  const progress = useStudentProgress();

  return (
    <StudentFrame active="submissions">
      <section className="grid flex-1 gap-4 py-4 sm:gap-5 sm:py-7 lg:grid-cols-[0.42fr_1.58fr] lg:py-8">
        <aside className="border-b bronze-rule pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
          <SectionLabel>Record Room</SectionLabel>
          <h1 className="mt-3 max-w-md font-serif text-[1.45rem] leading-[1.1] text-ivory sm:mt-4 sm:text-[2.35rem]">
            Your responses are recorded <br className="sm:hidden" />in the system.
          </h1>
          <Rule className="my-4 sm:my-5" />
          <p className="max-w-sm text-[13px] leading-6 text-ivory/70 sm:text-base sm:leading-7">Quality is measured. Standards enforced.</p>
          <div className="mt-4 hidden lg:block sm:mt-5">
            <ArchitecturalPanel variant="record" />
          </div>
        </aside>
        <div className="border bronze-rule bg-carbon/50 p-3.5 shadow-[inset_0_0_70px_rgba(155,116,55,0.05)] sm:p-5 lg:p-6">
          <div className="border-y bronze-rule">
            <div className="hidden grid-cols-[1.1fr_1fr_0.56fr_0.45fr] border-b bronze-rule py-4 text-[10px] uppercase tracking-[0.3em] text-amber md:grid">
              <div>Submission</div>
              <div>Module / Lecture</div>
              <div>Status</div>
              <div>Date</div>
            </div>
            <div className="divide-y bronze-rule">
              {progress.submissions.map((submission) => (
                <article key={submission.id} className="grid gap-2 py-3 md:grid-cols-[1.1fr_1fr_0.56fr_0.45fr] md:gap-5 md:py-5">
                  <div>
                    <p className="font-serif text-base leading-snug text-ivory md:text-xl">{submission.title} - {submission.context.endsWith("L02") ? "Lecture 2" : "Lecture 1"}</p>
                    <p className="mt-2 text-[8px] uppercase leading-4 tracking-[0.16em] text-amber/75 md:tracking-[0.22em]">{submission.evidenceType}</p>
                    <p className="mt-1 max-w-sm text-[11px] leading-5 text-ivory/55">{submission.capabilityDomains.join(" / ")}</p>
                    {submission.status === "correction-required" ? (
                      <p className="mt-2 max-w-xs text-[11px] leading-5 text-amber/75">
                        {submission.correctionNote ?? "Correction required before this record can be approved."}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <p className="text-[8px] uppercase leading-4 tracking-[0.16em] text-amber/75 md:hidden">Module / Lecture</p>
                    <p className="text-[12px] leading-5 text-ivory/70 md:text-sm">{submission.context}</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase leading-4 tracking-[0.16em] text-amber/75 md:hidden">Status</p>
                    <p className="text-[8px] uppercase leading-4 tracking-[0.16em] text-amber md:text-[10px] md:tracking-[0.26em]">{formatStatus(submission.status)}</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase leading-4 tracking-[0.16em] text-amber/75 md:hidden">Date</p>
                    <p className="text-[12px] leading-5 text-ivory/70 md:text-sm">{submission.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </StudentFrame>
  );
}
