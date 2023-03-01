import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FieldCellContainer from "../Field-cell/FieldCell";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { gameSlice } from "../../store/reducers/GameSlice";
import classes from "./GameBoard.module.scss";
import { Character } from "../../models/Character.type";
import ItemsAndWeaponsNames from "../../models/ItemsAndWeaponsNames";
import WinCells from "../../constants/WinCells";
import { WinItemsObj } from "../../entities/Game/AbstractGame";
import FieldCell from "../../models/FieldCell.type";
import Pages from "../../models/Pages";

const GameBoard: FC = () => {
  const dispatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.gameReducer);
  const newGame = structuredClone(game) as StandardGame;
  const fieldCells = newGame.board;

  const activeCell = newGame.board.find((item) => item.active === true) || null;
  const [cellsToMove, setCellsToMove] = useState<(number | "")[]>([]);
  const navigate = useNavigate();

  if (!game?.currentCharacter?.currentPositionId && cellsToMove.length === 0) {
    setCellsToMove([121, 122, 133, 134]);
  }

  // checking functions for winning
  const [hasAllThingsForFinish, setAllThingsValue] = useState(false);
  const [isEmptyWinCells, setEmptyWinCells] = useState(false);
  const hasGasolineAndKeys = (winItems: WinItemsObj) => {
    const items = Object.values(winItems).flat();
    return items.includes("gasoline") && items.includes("keys");
  };
  const hasWinCellsCards = (
    fieldCellsArr: FieldCell<number>[],
    winCellsNumbers: number[],
  ) => {
    const winCells = fieldCellsArr.filter((item) =>
      winCellsNumbers.includes(item.id),
    );
    return winCells.some((item) => item.zombieID || item.holdItemID);
  };
  const hasWinCellsAllCharsWithThings = (
    winCellsNumbers: number[],
    winItems: WinItemsObj,
    fieldCellsArr: FieldCell<number>[],
  ) => {
    const winCells = fieldCellsArr.filter((item) =>
      winCellsNumbers.includes(item.id),
    );
    const winCellsCharNames = winCells.reduce((accum: string[], item) => {
      if (item.characterName) {
        accum.push(item.characterName);
      }
      return accum;
    }, []);
    const winItemsNamesOwners = Object.keys(winItems);

    // sorts the arrays to see if they are equal
    winCellsCharNames.sort((a: string, b: string) => (a > b ? 1 : -1));
    winItemsNamesOwners.sort((a: string, b: string) => (a > b ? 1 : -1));

    return (
      JSON.stringify(winCellsCharNames) ===
        JSON.stringify(winItemsNamesOwners) && hasGasolineAndKeys(winItems)
    );
  };

  useEffect(() => {
    const currentCharacter = game?.currentCharacter as Character;
    const numb = currentCharacter?.currentPositionId;
    const stage = currentCharacter?.stage;
    const name = currentCharacter?.name;
    const turns = currentCharacter?.countOfTurns;
    const curCell = game?.board.find((cell) => cell.id === numb);

    if (!numb) {
      setTimeout(() => {
        alert(`Place ${name} on the board `);
      }, 650);
    }
    if (
      numb &&
      stage === "roll" &&
      !curCell?.holdItemID &&
      !curCell?.zombieID
    ) {
      alert(`Roll spin and choose fieldCell for step Character - ${name}`);
    }
    if (numb && stage === "fight" && curCell?.zombieID) {
      const grenades = currentCharacter!.weapons[ItemsAndWeaponsNames.GRENADES];

      if (grenades) {
        alert(
          "You have grenades! If you want, you can use it or just roll spin and use it after...",
        );
      } else alert(`Roll spin and fight with zombie- ${name}`);
    }
    if (turns === 0 && stage === "action") {
      setCellsToMove([]);
    }
    if (
      game &&
      turns === 0 &&
      !curCell?.holdItemID &&
      !curCell?.zombieID &&
      curCell?.characterName &&
      stage === "action"
    ) {
      newGame.currentCharacter!.stage = "finish";
      newGame.nextCharacter = true;
      dispatch(gameSlice.actions.writeGameState(newGame as StandardGame));
    }
    if (hasGasolineAndKeys(game!.winItems) && !hasAllThingsForFinish) {
      alert(
        "YOU CHARACTERS HAVES GASOLINE AND KEYS, GO TO RED CAR, NOOOOOOOOOOOOOOOW!",
      );
      setAllThingsValue(true);
    }
    if (hasWinCellsAllCharsWithThings(WinCells, game!.winItems, fieldCells)) {
      if (hasWinCellsCards(fieldCells, WinCells) && !isEmptyWinCells) {
        alert("Kill all zombies and pick up all things on win cells");
        setEmptyWinCells(true);
      } else if (!hasWinCellsCards(fieldCells, WinCells)) {
        alert("You Win");
        navigate(Pages.main);
      }
    }
  }, [
    game?.currentCharacter?.currentPositionId,
    game?.currentCharacter?.stage,
  ]);
  return (
    <div className={classes.gameField}>
      {fieldCells.map((item) => (
        <FieldCellContainer
          cell={item}
          isActive={activeCell ? item.id === activeCell.id : false}
          isCellToMove={cellsToMove.includes(item.id)}
          isFinishCell={
            WinCells.includes(item.id) && hasGasolineAndKeys(game!.winItems)
          }
          charName={item.characterName}
          setCellsToMoveArray={setCellsToMove}
          key={`cellID: ${item.id}`}
        />
      ))}
    </div>
  );
};

export default GameBoard;
