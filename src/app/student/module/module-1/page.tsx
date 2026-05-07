"use client";

import Link from "next/link";
import { ResetLocalProgress } from "@/components/student/ResetLocalProgress";
import { Rule } from "@/components/student/Rule";
import { SectionLabel } from "@/components/student/SectionLabel";
import { SequenceList } from "@/components/student/SequenceList";
import { StudentFrame } from "@/components/student/StudentFrame";
import { modules } from "@/lib/student-data";
import { useStudentProgress } from "@/lib/student-progress";

export default function ModulePage() {
  const module = modules[0];
  const progress = useStudentProgress();
  const activeLecture = progress.lectures.find((lecture) => lecture.status === "active");

  return (
    <StudentFrame active="module" tone="light">
      <section className="grid flex-1 gap-4 py-4 sm:gap-5 sm:py-7 lg:grid-cols-[0.56fr_1.44fr] lg:py-8">
        <aside className="border-b bronze-rule pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-7">
          <SectionLabel light>Module Ledger</SectionLabel>
          <h1 className="mt-3 font-serif text-[1.55rem] leading-[1.08] text-ink sm:mt-4 sm:text-4xl">
            Phase 1A
            <br />- {module.label}
          </h1>
          <p className="mt-3 font-serif text-lg leading-snug text-bronze sm:text-2xl">{module.title}</p>
          <Rule className="my-4 sm:my-5" />
          <p className="max-w-sm text-[13px] leading-6 text-ink/70 sm:text-base sm:leading-7">{module.summary}</p>
          <div className="mt-5 sm:mt-6">
            <SectionLabel light>Module Status</SectionLabel>
            <p className="mt-3 text-[9px] uppercase leading-5 tracking-[0.18em] text-ink/70 sm:mt-4 sm:text-[11px] sm:leading-6 sm:tracking-[0.28em]">
              {progress.completedCount} of 3 lectures completed
            </p>
          </div>
          <ResetLocalProgress light />
        </aside>
        <div className="ledger-surface border bronze-rule p-3.5 shadow-[inset_0_0_80px_rgba(155,116,55,0.1)] sm:p-5 lg:p-6">
          <SectionLabel light>Lecture Sequence</SectionLabel>
          <div className="mt-4">
            <SequenceList
              light
              items={progress.lectures.map((lecture) => ({
                number: lecture.number,
                title: `Lecture ${lecture.number}`,
                summary: lecture.title,
                status: lecture.status,
                href: lecture.href,
              }))}
            />
          </div>
          <p className="mt-4 max-w-sm border-t bronze-rule pt-3 text-[13px] leading-6 text-ink/68 sm:mt-5 sm:pt-4 sm:text-sm sm:leading-7">Complete all lectures in this module to unlock the next phase.</p>
          {activeLecture?.href ? (
            <Link
              href={activeLecture.href}
              className="mt-4 inline-flex border border-bronze/60 bg-bronze/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-bronze sm:mt-5 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.3em]"
            >
              Continue Lecture {activeLecture.number}&nbsp;&nbsp;-
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="mt-4 inline-flex cursor-not-allowed border border-bronze/35 bg-bronze/5 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-bronze/50 sm:mt-5 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.3em]"
            >
              Lecture 03 pending route
            </button>
          )}
        </div>
      </section>
    </StudentFrame>
  );
}
