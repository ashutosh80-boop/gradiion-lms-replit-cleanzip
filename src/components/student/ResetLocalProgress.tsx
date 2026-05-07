"use client";

import { useStudentProgress } from "@/lib/student-progress";

type ResetLocalProgressProps = {
  light?: boolean;
};

export function ResetLocalProgress({ light = false }: ResetLocalProgressProps) {
  const { resetProgress } = useStudentProgress();

  return (
    <button
      type="button"
      onClick={resetProgress}
      className={`mt-4 border-b pb-1 text-[8px] uppercase tracking-[0.16em] transition hover:text-amber ${
        light ? "border-ink/20 text-ink/42" : "border-ivory/20 text-ivory/38"
      }`}
    >
      Reset Local Progress
    </button>
  );
}
