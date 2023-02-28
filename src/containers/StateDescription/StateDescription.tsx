import { useContext } from "react";
import Button from "../../components/button/Button";
import GameDescription from "../../components/gameDescription/GameDesctiption";
import GameTime from "../../components/gameTime/GameTime";
import GameTurns from "../../components/gameTurns/GameTurns";
import { KindOfWinObj } from "../../entities/Game/AbstractGame";
import { CharacterName } from "../../models/Character.type";
import ActionContext from "../ActionContainer/ActionContext";
import classes from "./StateDescription.module.scss";

const StateDescription = () => {
  const { action, countOfTurn, changeStatus, turn, isDisabled, winItems } =
    useContext(ActionContext);

  return (
    <div className={classes["state-description"]}>
      <GameTime />
      <GameTurns turn={turn} />
      <GameDescription description="GameAction" value={action} />
      <GameDescription description="GamePointsOfAction" value={countOfTurn} />
      <div>
        <span>
          You need find "GASOLINE" and "KEYS" in order to finish the game
        </span>
        <span>
          Current find items:{" "}
          <strong>
            {(Object.keys(winItems) as Array<keyof typeof winItems>).reduce(
              (acc: (KindOfWinObj[] | undefined)[], cur: CharacterName) => {
                return [...acc, winItems[cur]];
              },
              [] as (typeof winItems)[keyof typeof winItems][],
            )}
          </strong>
        </span>
      </div>
      <Button
        title="End of Turn"
        onClickHandler={changeStatus}
        disabled={isDisabled}
      />
    </div>
  );
};

export default StateDescription;
