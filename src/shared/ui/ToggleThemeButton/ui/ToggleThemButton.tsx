import { useTheme } from "app/providers/ThemProvider";
import style from "./ToggleThemeButton.module.scss";

const ToggleThemButton = () => {
  const { theme, toggleTheme } = useTheme();

  let themeName = theme == "dark" ? style.dark : style.light;
  return (
    <div className={`${style.toggleWrapper} ${themeName}`}>
      <input type="checkbox" className={style.dn} id="dn" />
      <label onClick={toggleTheme} htmlFor="dn" className={`${style.toggle}`}>
        <span className={style.toggle__handler}>
          <span className={`${style.crater} ${style.crater1}`}></span>
          <span className={`${style.crater} ${style.crater2}`}></span>
          <span className={`${style.crater} ${style.crater3}`}></span>
        </span>
        <span className={`${style.star} ${style.star1}`}></span>
        <span className={`${style.star} ${style.star2}`}></span>
        <span className={`${style.star} ${style.star3}`}></span>
        <span className={`${style.star} ${style.star4}`}></span>
        <span className={`${style.star} ${style.star5}`}></span>
        <span className={`${style.star} ${style.star6}`}></span>
      </label>
    </div>
  );
};

export default ToggleThemButton;
