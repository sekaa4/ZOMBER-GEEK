import { useMemo, useState } from "react";
import CharacterDetails from "../../components/characterDetails/CharacterDetails";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { Character } from "../../models/Character.type";
import CharacterProps from "../../models/CharacterProps";
import { gameSlice } from "../../store/reducers/GameSlice";
import FieldCell from "../../models/FieldCell.type";
import SpinContainer from "../SpinContainer/SpinContainer";
import StateDescription from "../StateDescription/StateDescription";
import ActionContext from "./ActionContext";

const ActionContainer = () => {
  const { game } = useAppSelector((state) => state.gameReducer);
  const dispatch = useAppDispatch();
  const newGame = structuredClone(game) as StandardGame;
  const { turn, board, currentCharacter, winItems, dropItems } = newGame;
  let isDisabled = true;
  const curCell = board.find(
    (cell) => cell.id === currentCharacter?.currentPositionId,
  ) as FieldCell<number>;

  const [action, setAction] = useState<string>("Roll Spin for get action");
  const [countOfTurn, setCountOfTurn] = useState<string | number>(0);

  if (
    newGame?.nextCharacter &&
    (currentCharacter?.stage === "fight" ||
      currentCharacter?.stage === "finish")
  ) {
    isDisabled = false;
  }

  if (
    !newGame?.nextCharacter &&
    currentCharacter?.stage === "action" &&
    (countOfTurn > currentCharacter.countOfTurns ||
      (currentCharacter.name === CharacterProps.CharacterNameFastest &&
        countOfTurn >= currentCharacter.countOfTurns))
  ) {
    isDisabled = false;
  }

  const setActionHandler = (prop: string) => {
    setAction(prop);
  };

  const setCountOfTurnHandler = (prop: string | number) => {
    setCountOfTurn(prop);
  };

  const changeStatus = () => {
    if (game && newGame && currentCharacter) {
      newGame.turn += 1;
      const { name } = currentCharacter as Character;
      const charactersNamesLife = game.usersNamesLifeList;
      const indexName = charactersNamesLife.indexOf(name);
      const nextCharacterNameIndex =
        (indexName + 1) % charactersNamesLife.length;
      const nextName = charactersNamesLife[nextCharacterNameIndex];
      const nextCharacter = newGame.usersCharacters[nextName] as Character;
      currentCharacter.active = false;
      currentCharacter.stage =
        currentCharacter.stage === "death" ? "death" : "roll";
      nextCharacter.active = true;
      nextCharacter.stage = "roll";
      newGame.rollDisabled = !nextCharacter.currentPositionId;

      newGame.currentCharacter = nextCharacter;
      newGame.nextCharacter = false;
      newGame.kindOfItems = null;

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

  const changeCountItemsHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    const nameItem = button.value;
    if (nameItem === "firstAidKits" && currentCharacter) {
      currentCharacter.items[nameItem] -= 1;
      if (currentCharacter.name === CharacterProps.CharacterNameWithHeal) {
        currentCharacter.health += 2;
      } else {
        currentCharacter.health += 1;
      }
    } else if (
      currentCharacter &&
      (nameItem === "crossbows" ||
        nameItem === "handguns" ||
        nameItem === "assaultRifles" ||
        nameItem === "shotguns" ||
        nameItem === "BFG" ||
        nameItem === "grenades")
    ) {
      if (curCell.zombieID && (curCell.zombieID !== 1 || nameItem === "BFG")) {
        const holdItems = curCell.holdItemID;

        currentCharacter.weapons[nameItem] -= 1;
        currentCharacter.stage = "finish";
        newGame.nextCharacter = true;
        newGame.rollDisabled = true;
        newGame.kindOfItems = null;
        curCell.zombieID = null;
        curCell.flipCell = true;
        button.disabled = true;

        if (holdItems) {
          dropItems!.forEach((holdItemId) => {
            currentCharacter.items[holdItemId] += 1;
          });
          const winItemsCharacter = winItems[currentCharacter.name];
          winItems[currentCharacter.name] = winItemsCharacter
            ? [...winItemsCharacter, ...dropItems!]
            : dropItems!;
          if (
            dropItems?.length === 2 ||
            Object.values(winItems).flat().length === 2
          )
            newGame.finishGame = true;
          newGame.dropItems = null;
          curCell.holdItemID = null;
        }
      } else if (
        curCell.zombieID &&
        curCell.zombieID === 1 &&
        nameItem !== "BFG"
      ) {
        newGame.rollDisabled = false;
        currentCharacter.weapons[nameItem] -= 1;
        alert(`You need use BFG to kill the BOSS , press 'SPIN'`);
      }
    } else {
      newGame.kindOfItems = null;
    }

    // dispatch board
    dispatch(gameSlice.actions.writeGameState(newGame));
  };

  const defaultProps = useMemo(
    () => ({
      setActionHandler,
      setCountOfTurnHandler,
      changeStatus,
      changeCountItemsHandler,
      action,
      countOfTurn,
      turn,
      isDisabled,
      winItems,
    }),
    [
      action,
      countOfTurn,
      turn,
      isDisabled,
      winItems,
      setActionHandler,
      setCountOfTurnHandler,
      changeStatus,
      changeCountItemsHandler,
    ],
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
