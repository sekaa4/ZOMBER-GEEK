import GameAction from "../../components/gameAction/GameAction";
import GamePointsOfAction from "../../components/gamePointsOfAction/GamePointsOfAction";
import GameTime from "../../components/gameTime/GameTime";
import GameTurns from "../../components/gameTurns/GameTurns";
import classes from "./StateDescription.module.scss";

const StateDescription = () => {
  return (
    <div className={classes["state-description"]}>
      <GameTime />
      <GameTurns />
      <GameAction />
      <GamePointsOfAction />
    </div>
  );
};

export default StateDescription;
