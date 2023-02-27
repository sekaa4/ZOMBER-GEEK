import { useContext } from "react";
import Button from "../../components/button/Button";
import GameDescription from "../../components/gameDescription/GameDesctiption";
import GameTime from "../../components/gameTime/GameTime";
import GameTurns from "../../components/gameTurns/GameTurns";
import ActionContext from "../ActionContainer/ActionContext";
import classes from "./StateDescription.module.scss";

const StateDescription = () => {
  const { action, countOfTurn, changeStatus, turn, isDisabled } =
    useContext(ActionContext);

  return (
    <div className={classes["state-description"]}>
      <GameTime />
      <GameTurns turn={turn} />
      <GameDescription description="GameAction" value={action} />
      <GameDescription description="GamePointsOfAction" value={countOfTurn} />
      <Button
        title="End of Turn"
        onClickHandler={changeStatus}
        disabled={isDisabled}
      />
    </div>
  );
};

export default StateDescription;
