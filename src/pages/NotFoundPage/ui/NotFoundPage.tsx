import style from "./NotFoundPage.module.scss";
const NotFoundPage = () => {
  return (
    <div className={style.notFound}>
      <h2 className={style.title}>"Page not found"</h2>
    </div>
  );
};

export default NotFoundPage;
