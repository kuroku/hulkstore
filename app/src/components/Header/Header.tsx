import { useContext } from "react";
import Icon from "../Icon/Icon";
import { UiContext } from "../Main/Main";
import "./header.scss";

export interface HeaderProps {
  title: string;
}

export const icon = {
  toogleTheme: "brightness_4",
  userMenu: "account_circle",
  shoppingCart: "shopping_cart",
};

export default function Header(props: HeaderProps) {
  const { title } = props;
  const { toogleTheme } = useContext(UiContext);
  return (
    <header id='appbar' className='bg-surface'>
      <h6>{title}</h6>
      <menu>
        <Icon name={icon.shoppingCart} outlined target />
        <Icon name={icon.userMenu} outlined target />
        <Icon name={icon.toogleTheme} outlined target onClick={toogleTheme} />
      </menu>
    </header>
  );
}
