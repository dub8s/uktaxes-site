import Link from "next/link";
import { type ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const styles = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary:
    "bg-transparent text-foreground border border-border hover:bg-surface",
};

const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={`${base} ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
