import Button from "../../components/button/Button";
import MainPage from "../../models/MainPage";
import classes from "./ButtonsContainerMain.module.scss";

export default function ButtonsContainerMain() {
  return (
    <div className={classes.container}>
      <div className={classes.buttons}>
        <Button title={MainPage.MY_PROFILE} />
        <Button title={MainPage.SEARCH_GAME} />
      </div>
      <div className={classes.buttons}>
        <Button title={MainPage.HISTORY} />
        <Button title={MainPage.RULES} />
      </div>
      <div className={classes.button}>
        <Button title={MainPage.DEVELOPERS} />
      </div>
    </div>
  );
}
