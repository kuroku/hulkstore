import { useContext, useState } from "react";
import Avatar from "../Avatar/Avatar";
import ModalLogin from "../Dialog/Modal/Login/Login";
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
  const { toogleTheme, user } = useContext(UiContext);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  return (
    <>
      <header id='appbar' className='bg-surface'>
        <h6>{title}</h6>
        <menu>
          <Icon name={icon.shoppingCart} outlined target />
          {user ? (
            <Avatar
              name={user.name}
              lastname={user.lastname}
              email={user.email}
            />
          ) : (
            <Icon
              name={icon.userMenu}
              outlined
              target
              onClick={() => setOpenLogin(true)}
            />
          )}

          <Icon name={icon.toogleTheme} outlined target onClick={toogleTheme} />
        </menu>
      </header>
      <ModalLogin open={openLogin} onClose={() => setOpenLogin(false)} />
    </>
  );
}
