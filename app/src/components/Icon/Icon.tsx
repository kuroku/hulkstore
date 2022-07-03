import { useMemo } from "react";
import "./icon.scss";

export interface IconProps {
  name: string;
  outlined?: boolean;
  target?: boolean;
  onClick?: () => void;
}

export default function Icon(props: IconProps) {
  const { name, outlined = false, target = false, onClick } = props;

  const className = useMemo(() => {
    return `material-icons${outlined ? "-outlined" : ""} ${
      target ? "target" : ""
    }`;
  }, [outlined, target]);

  return (
    <i id='icon' className={className} onClick={onClick}>
      {name}
    </i>
  );
}
