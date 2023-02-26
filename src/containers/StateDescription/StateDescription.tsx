import { useContext } from "react";
import Button from "../../components/button/Button";
import GameDescription from "../../components/gameDescription/GameDesctiption";
import GameTime from "../../components/gameTime/GameTime";
import GameTurns from "../../components/gameTurns/GameTurns";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Character } from "../../models/Character.type";
import { gameSlice } from "../../store/reducers/GameSlice";
import ActionContext from "../ActionContainer/ActionContext";
import classes from "./StateDescription.module.scss";

const StateDescription = () => {
  const { action, countOfTurn } = useContext(ActionContext);
  const { game } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();
  const newGame = structuredClone(game) as StandardGame;
  const { turn } = newGame;
  const isDisabled = !newGame?.nextCharacter;

  const changeStatus = () => {
    if (game && newGame && newGame.currentCharacter) {
      const { name } = game.currentCharacter as Character;
      const charactersNamesLife = game.usersNamesLifeList;
      const indexName = charactersNamesLife.indexOf(name);
      const nextCharacterNameIndex =
        (indexName + 1) % charactersNamesLife.length;
      const nextName = charactersNamesLife[nextCharacterNameIndex];
      const nextCharacter = newGame.usersCharacters[nextName] as Character;
      nextCharacter.active = true;
      nextCharacter.stage = "roll";
      newGame.currentCharacter.stage = "prepare";
      newGame.currentCharacter.active = false;
      newGame.currentCharacter = nextCharacter;
      newGame.nextCharacter = false;
      newGame.rollDisabled = false;

      // change active cell to current char
      newGame.board.forEach((cell) => {
        const c = cell;
        c.active = false;
        if (c.characterName === newGame.currentCharacter!.name) {
          c.active = true;
        }
      });
      // dispatch board
      dispatch(gameSlice.actions.writeGameState(newGame));
    }
  };

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
