import { FC, useState } from "react";
import classes from "./index.module.scss";
import Button from "../../components/button/Button";

const LoginPage: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <section className={classes.login}>
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
        <Button title="Login" />
      </div>
    </section>
  );
};

export default LoginPage;
