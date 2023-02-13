import GameAction from "../../components/gameAction/GameAction";
import GamePointsOfAction from "../../components/gamePointsOfAction/GamePointsOfAction";
import GameTime from "../../components/gameTime/GameTime";
import GameTurns from "../../components/gameTurns/GameTurns";
import classes from "./StateDescription.module.scss";

interface StateDescriptionProps {
  action: string | number;
  countOfTurn: string | number;
}

const StateDescription = (props: StateDescriptionProps) => {
  const { action, countOfTurn } = props;
  return (
    <div className={classes["state-description"]}>
      <GameTime />
      <GameTurns />
      <GameAction action={action} />
      <GamePointsOfAction points={countOfTurn} />
    </div>
  );
};

export default StateDescription;
