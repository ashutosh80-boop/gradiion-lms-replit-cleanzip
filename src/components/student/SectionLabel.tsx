type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <p className={`text-[10px] font-semibold uppercase tracking-[0.32em] ${light ? "text-bronze" : "text-amber"}`}>
      {children}
    </p>
  );
}
