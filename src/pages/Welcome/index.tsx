import SimpleText from "../../components/simple-text/SimpleText";
import ButtonsContainer from "../../containers/ButtonsContainer/ButtonsContainer";
import WelcomePage from "../../models/WelcomePage";
import classes from "./index.module.scss";

export default function Welcome() {
  return (
    <div className={classes.welcome}>
      <SimpleText text={WelcomePage.WELCOME} />
      <ButtonsContainer />
    </div>
  );
}
