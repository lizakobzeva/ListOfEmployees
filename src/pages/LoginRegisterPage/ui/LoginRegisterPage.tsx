import { LoginRegisterForm } from "features/AuthByEmail/ui";
import style from "./LoginRegisterPage.module.scss";

const LoginRegisterPage = () => {
  return (
    <div className={style.Page}>
      <LoginRegisterForm />
    </div>
  );
};
export default LoginRegisterPage;
