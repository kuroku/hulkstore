import { HTMLInputTypeAttribute } from "react";
import "./textfield.scss";
export interface TextfieldProps {
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string;
  error?: string;
  onChange: (value: string) => void;
}

export default function Textfield(props: TextfieldProps) {
  const { placeholder, value, error, type = "text", onChange } = props;
  return (
    <div id='textfield'>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        className={`${error ? "error" : ""}`}
      />
    </div>
  );
}
