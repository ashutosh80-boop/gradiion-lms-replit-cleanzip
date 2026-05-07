import Link from "next/link";

type StudentFrameProps = {
  children: React.ReactNode;
  tone?: "dark" | "light";
  active?: "home" | "module" | "submissions";
};

const navItems = [
  { href: "/student", label: "Home", key: "home" },
  { href: "/student/module/module-1", label: "Current Module", key: "module" },
  { href: "/student/submissions", label: "Submissions", key: "submissions" },
] as const;

export function StudentFrame({ children, tone = "dark", active = "home" }: StudentFrameProps) {
  const isLight = tone === "light";

  return (
    <main className={isLight ? "stone-surface min-h-screen text-ink" : "command-depth min-h-screen text-ivory"}>
      <div className="mx-auto flex min-h-screen w-full max-w-[1180px] flex-col px-5 py-3 sm:px-6 sm:py-4 lg:px-8">
        <header className="flex items-center justify-between gap-5 border-b bronze-rule pb-3 text-[8px] uppercase tracking-[0.12em] sm:gap-8 sm:pb-4 sm:text-[10px] sm:tracking-[0.28em]">
          <Link href="/student" className="font-serif text-[13px] tracking-[0.18em] text-amber sm:text-base sm:tracking-[0.38em]">
            GRADIION
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`pb-2 ${
                  active === item.key
                    ? "border-b border-bronze text-amber"
                    : isLight
                      ? "text-ink/70"
                      : "text-ivory/68"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className={`${isLight ? "text-ink/70" : "text-amber"} hidden sm:block`}>Student&nbsp;&nbsp;-</div>
        </header>
        {children}
      </div>
    </main>
  );
}




