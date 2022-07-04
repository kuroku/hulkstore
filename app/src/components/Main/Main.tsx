import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { UserAuthResponse } from "../../../../server/types/response";
import Toast from "../Dialog/Toast/Toast";
import "./main.scss";

export type Themetype = "light" | "dark";

export interface MainProps {
  children: React.ReactElement | React.ReactElement[];
}

export interface UiContextProps {
  theme: Themetype;
  toogleTheme: () => void;
  onLogin: (user: UserAuthResponse) => void;
  user?: UserAuthResponse["user"];
}

const userSession = localStorage.getItem("user");

export const defaultUi: UiContextProps = {
  theme: (localStorage.getItem("theme") as Themetype) || "light",
  toogleTheme: () => {},
  onLogin: () => {},
  user: userSession ? JSON.parse(userSession) : undefined,
};

export const UiContext = createContext<UiContextProps>(defaultUi);

export default function Main(props: MainProps) {
  const { children } = props;
  const [theme, setTheme] = useState<Themetype>(defaultUi.theme);
  const [user, setUser] = useState<UserAuthResponse["user"]>();

  const toogleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }, [theme]);

  const changeMetaTheme = useCallback(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", theme === "light" ? "#fff" : "#424242");
  }, [theme]);

  const onLogin = useCallback((res: UserAuthResponse) => {
    setUser(res.user);
    localStorage.setItem("user", JSON.stringify(res.user));
    document.cookie = `token=${res.token}`;
  }, []);

  useEffect(() => {
    changeMetaTheme();
  }, [changeMetaTheme]);

  const className = useMemo<string>(() => {
    return `theme-${theme}`;
  }, [theme]);

  return (
    <main id='app' className={className}>
      <UiContext.Provider value={{ theme, toogleTheme, user, onLogin }}>
        {children}
        <Toast />
      </UiContext.Provider>
    </main>
  );
}
