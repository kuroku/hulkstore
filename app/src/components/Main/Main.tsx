import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Toast from "../Dialog/Toast/Toast";
import "./main.scss";

export type Themetype = "light" | "dark";

export interface MainProps {
  children: React.ReactElement | React.ReactElement[];
}

export interface UiContextProps {
  theme: Themetype;
  toogleTheme: () => void;
}

export const defaultUi: UiContextProps = {
  theme: (localStorage.getItem("theme") as Themetype) || "light",
  toogleTheme: () => {},
};

export const UiContext = createContext<UiContextProps>(defaultUi);

export default function Main(props: MainProps) {
  const { children } = props;
  const [theme, setTheme] = useState<Themetype>(defaultUi.theme);

  const toogleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  const changeMetaTheme = useCallback(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", theme === "light" ? "#fff" : "#424242");
  }, [theme]);

  useEffect(() => {
    changeMetaTheme();
  }, [changeMetaTheme]);

  const className = useMemo<string>(() => {
    return `theme-${theme}`;
  }, [theme]);

  return (
    <main id='app' className={className}>
      <UiContext.Provider value={{ theme, toogleTheme }}>
        {children}
        <Toast />
      </UiContext.Provider>
    </main>
  );
}
