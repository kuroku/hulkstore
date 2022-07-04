import { useMemo } from "react";
import "./button.scss";

export interface ButtonProps {
  children: string;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  variant?: "bg" | "border" | "color";
  color?: "primary" | "secondary" | "surface";
  fullWidth?: boolean;
}

export default function Button(props: ButtonProps) {
  const {
    children,
    onClick,
    size = "sm",
    variant = "bg",
    color = "primary",
    fullWidth,
  } = props;

  const className = useMemo(() => {
    return `${size} ${variant}-${color} ${fullWidth ? "full-width" : ""}`;
  }, [size, variant, color, fullWidth]);

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
