import SimpleText from "../../components/simple-text/SimpleText";
import ButtonsContainerMain from "../../containers/ButtonsContainerMain/ButtonsContainerMain";
import MainPage from "../../models/MainPage";
import classes from "./index.module.scss";

export default function Main() {
  return (
    <div className={classes.welcome}>
      <SimpleText text={MainPage.MAIN_TITLE} />
      <ButtonsContainerMain />
    </div>
  );
}
