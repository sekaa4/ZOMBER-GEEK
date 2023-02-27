import { useMemo, useState } from "react";
import CharacterDetails from "../../components/characterDetails/CharacterDetails";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { Character } from "../../models/Character.type";
import { gameSlice } from "../../store/reducers/GameSlice";
import SpinContainer from "../SpinContainer/SpinContainer";
import StateDescription from "../StateDescription/StateDescription";
import ActionContext from "./ActionContext";

const ActionContainer = () => {
  const { game } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();
  const newGame = structuredClone(game) as StandardGame;
  const { turn } = newGame;
  const isDisabled = !newGame?.nextCharacter;

  const [action, setAction] = useState<string>("Roll Spin for get action");
  const [countOfTurn, setCountOfTurn] = useState<string | number>(0);

  const setActionHandler = (prop: string) => {
    setAction(prop);
  };

  const setCountOfTurnHandler = (prop: string | number) => {
    setCountOfTurn(prop);
  };

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
      newGame.currentCharacter.stage =
        newGame.currentCharacter.stage === "death" ? "death" : "prepare";
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

  const defaultProps = useMemo(
    () => ({
      setActionHandler,
      setCountOfTurnHandler,
      changeStatus,
      action,
      countOfTurn,
      turn,
      isDisabled,
    }),
    [action, countOfTurn, turn, isDisabled],
  );

  return (
    <ActionContext.Provider value={defaultProps}>
      <SpinContainer />
      <StateDescription />
      <CharacterDetails />
    </ActionContext.Provider>
  );
};

export default ActionContainer;
