"use client";

import Link from "next/link";
import { ArchitecturalPanel } from "@/components/student/ArchitecturalPanel";
import { ResetLocalProgress } from "@/components/student/ResetLocalProgress";
import { Rule } from "@/components/student/Rule";
import { SectionLabel } from "@/components/student/SectionLabel";
import { SequenceList } from "@/components/student/SequenceList";
import { StudentFrame } from "@/components/student/StudentFrame";
import { modules, phases } from "@/lib/student-data";
import { useStudentProgress } from "@/lib/student-progress";

export default function StudentHomePage() {
  const progress = useStudentProgress();
  const activeModule = modules[0];
  const activeLecture = progress.lectures.find((lecture) => lecture.status === "active");

  return (
    <StudentFrame active="home">
      <section className="grid flex-1 gap-4 py-4 sm:gap-5 sm:py-7 lg:grid-cols-[0.76fr_1.24fr] lg:items-start lg:py-8">
        <div className="flex flex-col justify-center">
          <SectionLabel>Command Chamber</SectionLabel>
          <h1 className="mt-3 max-w-lg font-serif text-[1.65rem] leading-[1.08] tracking-normal text-ivory sm:mt-4 sm:text-4xl lg:text-5xl">
            Continue Current Section.
          </h1>
          <Rule className="my-4 sm:my-5" />
          <p className="max-w-sm text-[13px] leading-6 text-ivory/72 sm:text-base sm:leading-7">{progress.currentRequirement}</p>
          <div className="mt-4 border-l border-bronze/50 pl-4 sm:mt-5 sm:pl-5">
            <SectionLabel>Current Location</SectionLabel>
            <p className="mt-2 font-serif text-lg leading-snug text-sandstone sm:mt-3 sm:text-2xl">{progress.currentLocation}</p>
          </div>
          {progress.currentCtaHref ? (
            <Link
              href={progress.currentCtaHref}
              className="mt-5 inline-flex w-fit border border-bronze/70 bg-bronze/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-amber shadow-[inset_0_0_32px_rgba(155,116,55,0.08)] transition hover:bg-bronze/15 sm:mt-6 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.3em]"
            >
              {progress.currentCtaLabel}&nbsp;&nbsp;-
            </Link>
          ) : (
            <button
              type="button"
              disabled
              className="mt-5 inline-flex w-fit cursor-not-allowed border border-bronze/35 bg-bronze/5 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-amber/50 sm:mt-6 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.3em]"
            >
              Lecture 03 pending route
            </button>
          )}
          <ResetLocalProgress />
        </div>
        <div className="grid gap-4">
          <ArchitecturalPanel label="Capability is not given. It is built, tested, and made reliable." />
          <div className="border bronze-rule bg-carbon/75 p-3.5 shadow-chamber sm:p-5">
            <div className="grid gap-4 lg:grid-cols-[0.56fr_1.44fr]">
              <div className="flex flex-col justify-between border-b bronze-rule pb-4 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-5">
                <div>
                  <SectionLabel>Current Requirement</SectionLabel>
                  <p className="mt-3 font-serif text-lg leading-tight sm:mt-4 sm:text-2xl">Capability is built through sequence.</p>
                </div>
                <div className="mt-3 space-y-1.5 text-[8px] uppercase leading-4 tracking-[0.18em] text-amber sm:mt-4 sm:space-y-2 sm:text-[9px] sm:leading-5 sm:tracking-[0.28em]">
                  <p>Complete the active lecture.</p>
                  <p>No section opens early.</p>
                  <p>Proceed under pressure.</p>
                </div>
              </div>
              <div>
                <SectionLabel>Progression Sequence</SectionLabel>
                <div className="mt-4">
                  <SequenceList
                    items={[
                      ...phases.map((phase) => ({
                        number: phase.label,
                        title: phase.title,
                        summary: phase.summary,
                        status: phase.status,
                        href: phase.href,
                      })),
                      {
                        number: activeLecture?.number ?? "03",
                        title: activeModule.title,
                        summary: activeLecture ? `Active lecture: ${activeLecture.title}` : "Lecture 03 route pending",
                        status: "active" as const,
                        href: activeLecture?.href,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StudentFrame>
  );
}
