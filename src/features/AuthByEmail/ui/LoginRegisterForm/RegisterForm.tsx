import style from "./LoginRegisterForm.module.scss";
import Button from "shared/ui/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "app/providers/StoreProvider";
import { RegisterByEmail } from "../../model/services/RegisterByEmail/RegisterByEmail";
import { getRegister } from "features/AuthByEmail/model/selectors/getRegister/getRegister";

type Inputs = {
  name: string;
  email: string;
  password: string;
  cart: Array<string>;
};

const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { error } = useSelector(getRegister);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const dataReg = {
      name: data.name,
      email: data.email,
      password: data.password,
      likedUsers: [""],
    };
    dispatch(RegisterByEmail(dataReg));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.centerWrap}>
      {error && <h4 className={style.errorTitle}>Error during registration</h4>}
      <h4 className={style.cardTitle}>Sign Up</h4>
      <div className={style.formGroup}>
        <input
          {...register("name", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
            maxLength: {
              value: 15,
              message: "max length is 15",
            },
          })}
          type="text"
          className={style.formStyle}
          placeholder="Your Name"
          maxLength={15}
        />
        {errors.name && (
          <span className={style.errorTitle} role="alert">
            {errors.name.message}
          </span>
        )}
      </div>
      <div className={style.formGroup}>
        <input
          {...register("email", { required: true })}
          type="email"
          className={style.formStyle}
          placeholder="Your Email"
          maxLength={30}
        />
      </div>
      <div className={style.formGroup}>
        <input
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
          type="password"
          className={style.formStyle}
          placeholder="Your Password"
        />
        {errors.password && (
          <span className={style.errorTitle} role="alert">
            {errors.password.message}
          </span>
        )}
      </div>
      <Button>Submit</Button>
    </form>
  );
};

export default RegisterForm;
