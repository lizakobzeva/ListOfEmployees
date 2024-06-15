import { NavLink } from "react-router-dom";
import style from "./NavBar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import ToggleThemButton from "shared/ui/ToggleThemeButton";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { getAuthData } from "entities/User/model/selectors/getAuthData/getAuthData";
import Avatar from "shared/ui/Avatar";
import { TOKEN_LOCALSTORAGE_KEY } from "shared/const/localStorage";

const NavBar = () => {
  const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
  const authData = useSelector(getAuthData);

  useEffect(() => {}, [token, authData]);

  return (
    <div className={classNames(style.navbar, {}, [])}>
      <div className={style.container}>
        <div className={style.settings}>
          <ToggleThemButton />
        </div>

        <div className={style.links}>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/allusers"}
          >
            All Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? style.activeLink : style.link
            }
            to={"/likedusers"}
          >
            Liked
          </NavLink>
        </div>

        <div className={style.auth}>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
