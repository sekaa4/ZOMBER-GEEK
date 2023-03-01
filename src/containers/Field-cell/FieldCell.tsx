import { FC, useEffect } from "react";
import FieldCell from "../../models/FieldCell.type";
import getAdjacentCells from "../../utils/getAdjacentCells";
import Directions from "../../models/Directions.type";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import StandardGame from "../../entities/Game/StandardGame";
import FieldCellComp from "../../components/FieldCellComp/FieldCellComp";
import { gameSlice } from "../../store/reducers/GameSlice";
import { CharacterName } from "../../models/Character.type";
import Items from "../../entities/Items/Items";
import Weapons from "../../entities/Weapon/Weapons";
import ItemsAndWeaponsNames from "../../models/ItemsAndWeaponsNames";
import { KindOfWinObj, WinItemsObj } from "../../entities/Game/AbstractGame";

type FieldCellProp = {
  cell: FieldCell<number>;
  isActive: boolean;
  isCellToMove: boolean;
  isFinishCell: boolean;
  charName: string | null;
  setCellsToMoveArray: (arr: (number | "")[]) => void;
};
const directionsValues: Directions[] = ["left", "right", "top", "bottom"];

const FieldCellContainer: FC<FieldCellProp> = ({
  cell,
  isActive,
  isCellToMove,
  isFinishCell,
  charName,
  setCellsToMoveArray,
}) => {
  const dispatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.gameReducer);
  const newGame = structuredClone(game) as StandardGame;
  const { currentCharacter } = newGame;

  const directions = directionsValues.map((str) => {
    const cellId = cell[str] ? getAdjacentCells(str, cell.id) : "";
    if (cellId) {
      const isChar = newGame.board[cellId - 1].characterName;
      return isChar && cell.active ? "" : cellId;
    }
    return cell.active ? cellId : "";
  });

  const curCell = newGame?.board.find(
    (cur) => cell.id === cur.id,
  ) as FieldCell<number>;
  const prevCell = newGame?.board.find(
    (cur) => newGame.currentCharacter?.currentPositionId === cur.id,
  ) as FieldCell<number>;

  useEffect(() => {
    const stage = game?.currentCharacter?.stage;
    if (stage === "action" && isActive) {
      setCellsToMoveArray(directions);
    }
    if (stage === "fight" && isActive && currentCharacter?.countOfTurns !== 0) {
      setCellsToMoveArray(directions);
    }
    return () => setCellsToMoveArray([]);
  }, [
    currentCharacter?.stage,
    currentCharacter?.countOfTurns,
    currentCharacter?.currentPositionId,
    cell.flipCell,
  ]);

  const clickHandler = () => {
    const stage = newGame?.currentCharacter?.stage;
    const positionId = newGame?.currentCharacter?.currentPositionId;
    const turns = newGame?.currentCharacter?.countOfTurns;

    if (isCellToMove) {
      currentCharacter!.active = true;
      currentCharacter!.currentPositionId = cell.id;
      if (prevCell) {
        prevCell.characterName = null;
        prevCell.active = false;
      }
      curCell.characterName = currentCharacter?.name as CharacterName;
      curCell.active = true;

      // if we choose first position
      if (stage === "prepare" && !positionId) {
        newGame!.currentCharacter!.stage = "roll";
        newGame!.rollDisabled = false;
        setCellsToMoveArray([]);
      }
      // if we go to an empty cell
      if (stage === "action" && positionId && turns !== 0) {
        newGame!.currentCharacter!.countOfTurns -= 1;
      }
      // if we go to an cell with zombie
      if (stage === "action" && cell.zombieID) {
        const newCell = newGame.board.find((item) => item.id === cell.id);

        newCell!.flipCell = false;
        newGame!.currentCharacter!.countOfTurns = 0;
        newGame!.currentCharacter!.stage = "fight";
        newGame.nextCharacter = false;
        newGame!.rollDisabled = false;
        setCellsToMoveArray([]);
      }
      // if we go to an cell with item
      if (stage === "action" && cell.holdItemID && cell.flipCell) {
        const newCell = newGame.board.find((item) => item.id === cell.id);
        newCell!.flipCell = !newCell?.flipCell;
        newGame!.currentCharacter!.countOfTurns = 0;
        newGame!.currentCharacter!.stage = "finish";
        setTimeout(() => {
          const timeoutBoard = structuredClone(newGame);
          const timeoutCell = timeoutBoard.board.find(
            (item) => item.id === cell.id,
          );
          const timeoutChar = timeoutBoard.currentCharacter;
          timeoutCell!.holdItemID = null;
          timeoutCell!.flipCell = true;
          timeoutBoard.nextCharacter = true;
          if (
            Object.prototype.hasOwnProperty.call(
              timeoutChar?.items,
              cell.holdItemID as string,
            )
          ) {
            if (
              cell.holdItemID === ItemsAndWeaponsNames.KEYS ||
              cell.holdItemID === ItemsAndWeaponsNames.GASOLINE
            ) {
              const winItemsObj = timeoutBoard.winItems as WinItemsObj;
              const nameChar = timeoutChar!.name as CharacterName;
              const winItem = cell.holdItemID as KindOfWinObj;

              if (winItemsObj[nameChar]) {
                winItemsObj[nameChar]?.push(winItem);
                if (
                  winItemsObj[nameChar]?.length === 2 ||
                  Object.keys(winItemsObj).length === 2
                ) {
                  timeoutBoard.finishGame = true;
                }
              } else {
                winItemsObj[nameChar] = [winItem];
              }
            }
            timeoutBoard!.currentCharacter!.items[
              cell!.holdItemID as keyof Items
            ] += 1;
          }
          if (
            Object.prototype.hasOwnProperty.call(
              timeoutChar?.weapons,
              cell.holdItemID as string,
            )
          ) {
            timeoutBoard!.currentCharacter!.weapons[
              cell!.holdItemID as keyof Weapons
            ] += 1;
          }
          setCellsToMoveArray([]);
          dispatch(gameSlice.actions.writeGameState(timeoutBoard));
        }, 1500);
        setCellsToMoveArray([]);
      }
      dispatch(gameSlice.actions.writeGameState(newGame));
    }
  };
  return (
    <FieldCellComp
      flipCell={cell.flipCell}
      zombieId={cell.zombieID}
      charName={charName}
      holdItemId={cell.holdItemID}
      isActive={isActive}
      isCellToMove={isCellToMove}
      isFinish={isFinishCell}
      clickHandlerCallback={clickHandler}
    />
  );
};

export default FieldCellContainer;
