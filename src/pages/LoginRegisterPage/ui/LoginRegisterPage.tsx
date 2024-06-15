import { LoginRegisterForm } from "features/AuthByEmail/ui";
import style from "./LoginRegisterPage.module.scss";

const LoginRegisterPage = () => {
  return (
    <div className={style.Page}>
      <div className={style.content}>
        <LoginRegisterForm />
      </div>
    </div>
  );
};
export default LoginRegisterPage;
