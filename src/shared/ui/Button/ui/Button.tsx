import React, { ReactNode } from "react";
import style from "./Button.module.scss";
// import "app/styles/index.scss";
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={style.button}>
      {children}
    </button>
  );
};

export default Button;
