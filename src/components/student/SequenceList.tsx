import Link from "next/link";
import { formatStatus, getAccessibleHref, type Status } from "@/lib/student-data";

type SequenceItem = {
  number: string;
  title: string;
  summary?: string;
  status: Status;
  href?: string;
};

type SequenceListProps = {
  items: SequenceItem[];
  light?: boolean;
};

export function SequenceList({ items, light = false }: SequenceListProps) {
  return (
    <div className="divide-y bronze-rule border-y bronze-rule bg-gradient-to-b from-bronze/[0.045] to-transparent">
      {items.map((item) => {
        const accessibleHref = getAccessibleHref(item.status, item.href);
        const isLocked = item.status === "locked";
        const content = (
          <div className={`grid gap-1.5 py-2.5 sm:grid-cols-[3rem_1fr_auto] sm:items-center sm:gap-2 sm:py-4 ${isLocked ? "opacity-55" : ""}`}>
          <div className={`font-serif text-base sm:text-xl ${light ? "text-ink" : "text-ivory"}`}>{item.number}</div>
          <div>
            <h3 className="font-serif text-base leading-snug sm:text-xl">{item.title}</h3>
            {item.summary ? (
              <p className={`mt-0.5 max-w-md text-[11px] leading-4 sm:mt-1 sm:text-[13px] sm:leading-5 ${light ? "text-ink/70" : "text-ivory/65"}`}>{item.summary}</p>
            ) : null}
          </div>
          <div className="text-[8px] uppercase tracking-[0.16em] sm:text-[10px] sm:tracking-[0.28em] text-amber">{formatStatus(item.status)}</div>
          </div>
        );

        return accessibleHref ? (
          <Link key={`${item.number}-${item.title}`} href={accessibleHref} className="block transition hover:bg-bronze/10">
            {content}
          </Link>
        ) : (
          <div key={`${item.number}-${item.title}`} aria-disabled={isLocked} className={isLocked ? "cursor-not-allowed" : undefined}>
            {content}
          </div>
        );
      })}
    </div>
  );
}





