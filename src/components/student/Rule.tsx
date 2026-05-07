export function Rule({ className = "" }: { className?: string }) {
  return <div className={`h-px w-20 bg-bronze ${className}`} />;
}
