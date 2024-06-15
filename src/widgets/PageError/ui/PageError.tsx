import style from "./PageError.module.scss";
import sadcatImage from "shared/assets/SadCat.png";

const PageError = () => {
  return (
    <div className={style.PageError}>
      <h1>"Something went wrong, try reloading the page"</h1>
      <img src={sadcatImage} alt="" />
    </div>
  );
};

export default PageError;
