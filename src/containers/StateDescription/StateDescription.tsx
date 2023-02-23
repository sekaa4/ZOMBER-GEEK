import { useContext } from "react";
import Button from "../../components/button/Button";
import GameDescription from "../../components/gameDescription/GameDesctiption";
import GameTime from "../../components/gameTime/GameTime";
import GameTurns from "../../components/gameTurns/GameTurns";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { gameSlice } from "../../store/reducers/GameSlice";
import ActionContext from "../ActionContainer/ActionContext";
import classes from "./StateDescription.module.scss";

const StateDescription = () => {
  const { action, countOfTurn } = useContext(ActionContext);
  const { game } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();
  const isDisabled = !game?.nextCharacter;

  const changeStatus = () => {
    if (game && game.currentCharacter) {
      const { name } = game.currentCharacter;
      const charactersNamesLife = game.usersNamesLifeList;
      const indexName = charactersNamesLife.indexOf(name);
      const nextCharacterNameIndex =
        (indexName + 1) % charactersNamesLife.length;
      const nextName = charactersNamesLife[nextCharacterNameIndex];
      const nextCharacter = game.usersCharacters[nextName];
      game.currentCharacter = nextCharacter;
      game.nextCharacter = false;
      dispatch(gameSlice.actions.writeGameState({ ...game } as StandardGame));
    }
  };

  return (
    <div className={classes["state-description"]}>
      <GameTime />
      <GameTurns />
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
