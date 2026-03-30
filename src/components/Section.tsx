import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = "", id }: SectionProps) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="container-narrow">{children}</div>
  </section>
);

export default Section;

export const SectionLabel = ({ children }: { children: ReactNode }) => (
  <span className="text-primary text-sm font-semibold uppercase tracking-widest mb-4 block">
    {children}
  </span>
);

export const SectionTitle = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight ${className}`}>
    {children}
  </h2>
);
