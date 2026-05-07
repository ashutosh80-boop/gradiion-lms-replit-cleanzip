"use client";

import { useEffect, useMemo, useState } from "react";
import { lectures, submissions, type Lecture, type Submission } from "@/lib/student-data";

const STORAGE_KEY = "gradiion.studentProgress.v1";

type StoredProgress = {
  lecture2Complete: boolean;
};

export type StudentProgressState = {
  lecture2Complete: boolean;
  lectures: Lecture[];
  completedCount: number;
  currentLocation: string;
  currentRequirement: string;
  currentCtaLabel: string;
  currentCtaHref?: string;
  currentCtaDisabled: boolean;
  submissions: Submission[];
  completeLecture2: () => void;
  resetProgress: () => void;
};

const defaultProgress: StoredProgress = {
  lecture2Complete: false,
};

function readProgress(): StoredProgress {
  if (typeof window === "undefined") return defaultProgress;

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<StoredProgress>;
    return { lecture2Complete: Boolean(parsed.lecture2Complete) };
  } catch {
    return defaultProgress;
  }
}

function writeProgress(progress: StoredProgress) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new Event("gradiion-progress-change"));
}

function clearProgress() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new Event("gradiion-progress-change"));
}

export function useStudentProgress(): StudentProgressState {
  const [progress, setProgress] = useState<StoredProgress>(defaultProgress);

  useEffect(() => {
    setProgress(readProgress());

    function syncProgress() {
      setProgress(readProgress());
    }

    window.addEventListener("storage", syncProgress);
    window.addEventListener("gradiion-progress-change", syncProgress);

    return () => {
      window.removeEventListener("storage", syncProgress);
      window.removeEventListener("gradiion-progress-change", syncProgress);
    };
  }, []);

  return useMemo(() => {
    const progressLectures = lectures.map((lecture) => {
      if (!progress.lecture2Complete) return lecture;
      if (lecture.id === "lecture-2") return { ...lecture, status: "complete" as const };
      if (lecture.id === "lecture-3") return { ...lecture, status: "active" as const };
      return lecture;
    });

    const completedCount = progressLectures.filter((lecture) => lecture.status === "complete").length;
    const currentLocation = progress.lecture2Complete ? "Phase 1A / Module 1 / Lecture 03" : "Phase 1A / Module 1 / Lecture 02";
    const currentRequirement = progress.lecture2Complete ? "Lecture 03 is active in local state." : "Complete the active lecture flow.";
    const currentCtaLabel = progress.lecture2Complete ? "Continue Lecture 3" : "Continue Lecture 2";
    const currentCtaHref = progress.lecture2Complete ? undefined : "/student/lecture/lecture-2";

    const progressSubmissions: Submission[] = progress.lecture2Complete
      ? [
          ...submissions,
          {
            id: "gcp-video-response-lecture-2",
            title: "GCP Video Response",
            context: "Phase 1A / Module 1 / L02",
            status: "pending-review" as const,
            date: "Local Session",
            evidenceType: "GCP Video Response" as const,
            capabilityDomains: ["Clarity", "Communication", "Professional Presence", "Composure"] as Submission["capabilityDomains"],
            phase: "Phase 1A",
            module: "Module 1",
            lecture: "Lecture 02",
            prompt: "Watch the prompt. When it ends, respond without over-preparing.",
            verificationStatus: "Unverified" as const,
          },
          {
            id: "field-application-lecture-2",
            title: "Field Application",
            context: "Phase 1A / Module 1 / L02",
            status: "correction-required" as const,
            date: "Local Session",
            evidenceType: "Field Application" as const,
            capabilityDomains: ["Execution", "Decision-Making", "Clarity"] as Submission["capabilityDomains"],
            phase: "Phase 1A",
            module: "Module 1",
            lecture: "Lecture 02",
            prompt: "Identify one real situation where this friction pattern appears.",
            verificationStatus: "Unverified" as const,
            correctionNote: "Correction required before this record can be approved.",
            failureTags: ["execution vagueness", "no evidence"],
          },
        ]
      : submissions;

    return {
      lecture2Complete: progress.lecture2Complete,
      lectures: progressLectures,
      completedCount,
      currentLocation,
      currentRequirement,
      currentCtaLabel,
      currentCtaHref,
      currentCtaDisabled: progress.lecture2Complete,
      submissions: progressSubmissions,
      completeLecture2: () => writeProgress({ lecture2Complete: true }),
      resetProgress: () => clearProgress(),
    };
  }, [progress]);
}
