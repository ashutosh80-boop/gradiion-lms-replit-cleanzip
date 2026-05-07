type ArchitecturalPanelProps = {
  variant?: "command" | "access" | "record";
  label?: string;
};

export function ArchitecturalPanel({ variant = "command", label }: ArchitecturalPanelProps) {
  return (
    <div className={`architectural-panel architectural-panel-${variant}`} aria-hidden="true">
      <div className="architectural-panel-shade" />
      {label ? <div className="architectural-panel-label">{label}</div> : null}
    </div>
  );
}
