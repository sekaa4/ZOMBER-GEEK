import SimpleText from "../../components/simpleText/SimpleText";
import ChooseContainer from "../../containers/ChooseContainerCreateGame/ChooseContainer";
import CreateGameConstants from "../../models/CreateGameConstants";
import classes from "./index.module.scss";

const CreateGame = () => {
  return (
    <div className={classes["create-game"]}>
      <SimpleText text={CreateGameConstants.CREATE_TITLE} />
      <ChooseContainer />
    </div>
  );
};

export default CreateGame;
