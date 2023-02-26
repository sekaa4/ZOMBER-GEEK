import { FC, useState } from "react";
import classes from "./index.module.scss";
import Button from "../../components/button/Button";
import userAPI from "../../api/UserService";
import { User } from "../../models/User.type";

const SignUpPage: FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [createUser, { data, isLoading, isError }] =
    userAPI.useCreateUserMutation();
  // const [updateUser /* , {} */] = userAPI.useUpdateUserMutation();
  // const [deleteUser /* , {} */] = userAPI.useDeleteUserMutation();

  const handlerCreate = async () => {
    const reqObj = { userName, password } as User;
    await createUser(reqObj);
  };

  // const handlerUpdate = (user: User) => {
  //   updateUser(user);
  // };

  // const handlerRemove = (user: User) => {
  //   deleteUser(user);
  // };
  return (
    <section className={classes.signUp}>
      <div>{isLoading}</div>
      <div>{isError}</div>
      {data && <div>{data.toString()}</div>}
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
