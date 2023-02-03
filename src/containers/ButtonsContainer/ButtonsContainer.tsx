import Button from "../../components/button/Button";
import WelcomePage from "../../models/WelcomePage";
import classes from "./ButtonsContainer.module.scss";

export default function ButtonsContainer() {
  return (
    <div className={classes.buttons}>
      <Button title={WelcomePage.ENTER} />
      <Button title={WelcomePage.SIGNUP} />
    </div>
  );
}
