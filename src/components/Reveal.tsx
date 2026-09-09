import type { ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "section";
};

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref as never} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
