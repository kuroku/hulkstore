import { useCallback, useMemo } from "react";
import "./avatar.scss";

export interface AvatarProps {
  name: string;
  lastname: string;
  email: string;
  size?: string;
}

export default function Avatar(props: AvatarProps) {
  const { name, lastname, email, size = "24px" } = props;

  const style = useMemo<React.CSSProperties>(() => {
    return { "--size": size } as React.CSSProperties;
  }, [size]);

  const shortName = useCallback(() => {
    return `${name.slice(0, 1)}${lastname.slice(0, 1)}`;
  }, [name, lastname]);

  return (
    <figure id='avatar' title={`${name} ${lastname} ${email}`} style={style}>
      <i>{shortName()}</i>
    </figure>
  );
}
