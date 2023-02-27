import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./index.module.scss";
import Button from "../../components/button/Button";
import userAPI from "../../api/UserService";
import { User } from "../../models/User.type";
import Pages from "../../models/Pages";

const LoginPage: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const [loginUser, { data, isLoading, isError, error }] =
    userAPI.useLoginUserMutation();

  const handlerLogin = async () => {
    const reqObj = { userName, password } as User;
    await loginUser(reqObj);
  };
  let err;
  if (error) {
    const newError = JSON.stringify(error);
    const anotherError = JSON.parse(newError);
    err = anotherError.data.message;
  }

  document.cookie = `isToken=${data?.token}; Max-Age=86400; Path=/; Expires=Tue`;

  setTimeout(() => {
    if (data?.token) {
      navigate(Pages.main);
    }
  }, 3000);

  return (
    <section className={classes.login}>
      <div>{isLoading}</div>
      <div>{isError}</div>
      {error && <div className={classes.errMessage}>{err}</div>}
      <h1>Login</h1>
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
        <Button title="Login" onClickHandler={handlerLogin} />
      </div>
    </section>
  );
};

export default LoginPage;
