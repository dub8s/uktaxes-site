import { type ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-border bg-background p-6 shadow-[0_1px_2px_rgba(24,24,27,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
