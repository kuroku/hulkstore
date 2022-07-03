import { useMemo } from "react";
import "./section.scss";

export interface SectionProps {
  children?: React.ReactElement | React.ReactElement[];
  grid?: boolean;
}

export default function Section(props: SectionProps) {
  const { children, grid = false } = props;

  const className = useMemo(() => {
    return `${grid ? "grid" : ""}`;
  }, [grid]);

  return (
    <section id='content' className={className}>
      {children}
    </section>
  );
}
