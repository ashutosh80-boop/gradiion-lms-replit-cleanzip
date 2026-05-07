export type Status = "complete" | "active" | "locked" | "pending-review" | "approved" | "correction-required" | "resubmitted";

export type CapabilityDomain = "Clarity" | "Communication" | "Decision-Making" | "Execution" | "Professional Presence" | "Composure";

export type EvidenceType =
  | "Baseline Diagnostic"
  | "Decision Check"
  | "Scenario Judgment Drill"
  | "GCP Video Response"
  | "GCP Audio Response"
  | "GCP Written Response"
  | "Field Application"
  | "Field Execution Report"
  | "Correction Resubmission"
  | "Capstone Response";

export type VerificationStatus = "Unverified" | "Accepted" | "Verified";

export type Phase = {
  id: string;
  label: string;
  title: string;
  status: Status;
  summary: string;
  href?: string;
};

export type Module = {
  id: string;
  phaseId: string;
  label: string;
  title: string;
  status: Status;
  summary: string;
  href?: string;
};

export type Lecture = {
  id: string;
  moduleId: string;
  number: string;
  title: string;
  status: Status;
  href?: string;
};

export type Submission = {
  id: string;
  title: string;
  context: string;
  status: Status;
  date: string;
  evidenceType: EvidenceType;
  capabilityDomains: CapabilityDomain[];
  phase: string;
  module: string;
  lecture: string;
  prompt: string;
  verificationStatus: VerificationStatus;
  correctionNote?: string;
  failureTags?: string[];
};

export type DecisionQuestion = {
  id: string;
  prompt: string;
  options: string[];
};

export const phases: Phase[] = [
  {
    id: "phase-1a",
    label: "01",
    title: "Phase 1A",
    status: "active",
    summary: "Collapse Awareness",
    href: "/student/phase/phase-1a",
  },
  {
    id: "phase-1b",
    label: "02",
    title: "Phase 1B",
    status: "locked",
    summary: "Behavioral Correction and Application",
  },
  {
    id: "capstone",
    label: "03",
    title: "Capstone Exam",
    status: "locked",
    summary: "Behavioral Integrity Under Pressure",
  },
];

export const modules: Module[] = [
  {
    id: "module-1",
    phaseId: "phase-1a",
    label: "Module 1",
    title: "Hidden Collapse Patterns",
    status: "active",
    summary: "Identify unseen pressure patterns before systems break.",
    href: "/student/module/module-1",
  },
];

export const lectures: Lecture[] = [
  {
    id: "lecture-1",
    moduleId: "module-1",
    number: "01",
    title: "Systemic Blind Spots",
    status: "complete",
    href: "/student/module/module-1",
  },
  {
    id: "lecture-2",
    moduleId: "module-1",
    number: "02",
    title: "Behavioral Friction Recognition",
    status: "active",
    href: "/student/lecture/lecture-2",
  },
  {
    id: "lecture-3",
    moduleId: "module-1",
    number: "03",
    title: "Collapse Triggers",
    status: "locked",
  },
];

export const submissions: Submission[] = [
  {
    id: "gcp-prompt",
    title: "GCP Prompt",
    context: "Phase 1A / Module 1 / L01",
    status: "pending-review",
    date: "May 13, 2025",
    evidenceType: "GCP Written Response",
    capabilityDomains: ["Clarity", "Decision-Making", "Execution"],
    phase: "Phase 1A",
    module: "Module 1",
    lecture: "Lecture 01",
    prompt: "Where does this friction pattern appear in your own behavior under pressure?",
    verificationStatus: "Unverified",
  },
  {
    id: "decision-check",
    title: "Decision Check",
    context: "Phase 1A / Module 1 / L01",
    status: "approved",
    date: "May 12, 2025",
    evidenceType: "Decision Check",
    capabilityDomains: ["Clarity", "Decision-Making", "Composure"],
    phase: "Phase 1A",
    module: "Module 1",
    lecture: "Lecture 01",
    prompt: "Recognize the pressure pattern and select the appropriate correction.",
    verificationStatus: "Accepted",
  },
  {
    id: "reflection",
    title: "Reflection",
    context: "Phase 1A / Module 1 / L01",
    status: "approved",
    date: "May 12, 2025",
    evidenceType: "GCP Written Response",
    capabilityDomains: ["Clarity", "Communication"],
    phase: "Phase 1A",
    module: "Module 1",
    lecture: "Lecture 01",
    prompt: "Reflect on the recognized behavior pattern and communicate the correction logic.",
    verificationStatus: "Accepted",
  },
];

export const currentStudentState = {
  requirement: "Complete the active lecture flow.",
  location: "Phase 1A / Module 1 / Lecture 02",
  phaseId: "phase-1a",
  moduleId: "module-1",
  activeLectureId: "lecture-2",
  primaryCtaHref: "/student/lecture/lecture-2",
};

export const lecture2DecisionQuestions: DecisionQuestion[] = [
  {
    id: "pressure-signal",
    prompt: "What is the first useful signal of behavioral friction?",
    options: ["A repeated pressure pattern", "A perfect plan", "A faster reaction"],
  },
  {
    id: "system-response",
    prompt: "When friction appears, what should be inspected first?",
    options: ["The surrounding system", "Personal motivation alone", "Final performance only"],
  },
  {
    id: "integrity-test",
    prompt: "What makes the pattern worth recording?",
    options: ["It repeats under pressure", "It feels inconvenient", "It disappears once noticed"],
  },
];

export const lecture2GcpPrompt = "Where does this friction pattern appear in your own behavior under pressure?";

export function getAccessibleHref(status: Status, href?: string) {
  return status === "locked" ? undefined : href;
}

export function formatStatus(status: Status) {
  const labels: Record<Status, string> = {
    complete: "Complete",
    active: "Active",
    locked: "Locked",
    "pending-review": "Pending Review",
    approved: "Approved",
    "correction-required": "Correction Required",
    resubmitted: "Resubmitted",
  };

  return labels[status];
}





