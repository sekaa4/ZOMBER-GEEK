import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.scss";
import Button from "../../components/button/Button";
import userAPI from "../../api/UserService";
import { User } from "../../models/User.type";
import Pages from "../../models/Pages";

const SignUpPage: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const [createUser, { data, isLoading, isError, error }] =
    userAPI.useCreateUserMutation();

  const handlerCreate = async () => {
    const reqObj = { userName, password } as User;
    await createUser(reqObj);
  };

  let err;
  if (error) {
    const newError = JSON.stringify(error);
    const anotherError = JSON.parse(newError);
    err = anotherError.data.message;
  }

  setTimeout(() => {
    if (data?.message === " Registration has successful") {
      navigate(Pages.login);
    }
  }, 3000);

  return (
    <section className={classes.signUp}>
      <div>{isLoading}</div>
      <div>{isError}</div>
      {data && <div className={classes.sucMessage}>{data.message} </div>}
      {error && <div className={classes.errMessage}>{err}</div>}
      <h1>Registration</h1>
      <div className={classes.form}>
        <input
          className={classes.input}
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          type="text"
          placeholder="UserName"
        />
        <input
          className={classes.input}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <Button title="SignUp" onClickHandler={handlerCreate} />
      </div>
    </section>
  );
};

export default SignUpPage;
