import style from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={style.Loader}>
      <div className={style.wrapper}>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.circle}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>
        <div className={style.shadow}></div>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default Loader;
