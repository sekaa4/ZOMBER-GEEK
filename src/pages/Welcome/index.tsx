import { FC } from "react";
import SimpleText from "../../components/simple-text/SimpleText";
import ButtonsContainer from "../../containers/ButtonsContainerWelcome/ButtonsContainerWelcome";
import WelcomePage from "../../models/WelcomePage";
import classes from "./index.module.scss";

const Welcome: FC = () => {
  return (
    <div className={classes.welcome}>
      <SimpleText text={WelcomePage.WELCOME} />
      <ButtonsContainer />
    </div>
  );
};

export default Welcome;
