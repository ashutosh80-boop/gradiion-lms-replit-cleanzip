import Link from "next/link";
import { ArchitecturalPanel } from "@/components/student/ArchitecturalPanel";
import { Rule } from "@/components/student/Rule";
import { SectionLabel } from "@/components/student/SectionLabel";
import { SequenceList } from "@/components/student/SequenceList";
import { StudentFrame } from "@/components/student/StudentFrame";
import { modules, phases } from "@/lib/student-data";

export default function PhasePage() {
  const activeModule = modules[0];

  return (
    <StudentFrame active="module">
      <section className="grid flex-1 gap-4 py-4 sm:gap-5 sm:py-7 lg:grid-cols-[0.62fr_1.38fr] lg:items-start lg:py-8">
        <div>
          <SectionLabel>Access Hall</SectionLabel>
          <h1 className="mt-3 max-w-md font-serif text-[1.55rem] leading-[1.12] text-ivory sm:mt-4 sm:text-4xl lg:text-5xl">
            Your path is structured <br className="sm:hidden" />in phases.
          </h1>
          <Rule className="my-4 sm:my-5" />
          <p className="max-w-sm text-[13px] leading-6 text-ivory/72 sm:text-base sm:leading-7">Complete each phase to gain access to the next.</p>
          <Link
            href={activeModule.href ?? "/student/module/module-1"}
            className="mt-5 inline-flex border border-bronze/70 bg-bronze/10 px-4 py-2.5 text-[9px] uppercase tracking-[0.18em] text-amber sm:mt-6 sm:px-5 sm:py-3 sm:text-[11px] sm:tracking-[0.3em]"
          >
            Enter Active Module&nbsp;&nbsp;-
          </Link>
        </div>
        <div className="grid gap-4 border-l bronze-rule pl-0 lg:pl-9">
          <ArchitecturalPanel variant="access" label="Each chamber opens only when the previous requirement is complete." />
          <SequenceList
            items={phases.map((phase) => ({
              number: phase.label,
              title: phase.title,
              summary: phase.summary,
              status: phase.status,
              href: phase.id === "phase-1a" ? activeModule.href : phase.href,
            }))}
          />
        </div>
      </section>
    </StudentFrame>
  );
}







