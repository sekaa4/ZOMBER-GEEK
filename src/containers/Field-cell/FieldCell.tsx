import { FC, useEffect } from "react";
import FieldCell from "../../models/FieldCell.type";
import getAdjacentCells from "../../utils/getAdjacentCells";
import Directions from "../../models/Directions.type";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import StandardGame from "../../entities/Game/StandardGame";
import FieldCellComp from "../../components/FieldCellComp/FieldCellComp";
import { gameSlice } from "../../store/reducers/GameSlice";
import { CharacterName } from "../../models/Character.type";

type FieldCellProp = {
  cell: FieldCell<number>;
  isActive: boolean;
  isCellToMove: boolean;
  charName: string | null;
  changeActiveCellID: (cellID: number) => void;
  setCellsToMoveArray: (arr: (number | "")[]) => void;
};
const directionsValues: Directions[] = ["left", "right", "top", "bottom"];

const FieldCellContainer: FC<FieldCellProp> = ({
  cell,
  isActive,
  isCellToMove,
  charName,
  changeActiveCellID,
  setCellsToMoveArray,
}) => {
  const dispatch = useAppDispatch();
  const { game } = useAppSelector((state) => state.gameReducer);
  const newGame = structuredClone(game) as StandardGame;
  const { currentCharacter } = newGame;

  const directions = directionsValues.map((str) => {
    const cellId = cell[str] ? getAdjacentCells(str, cell.id) : "";
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
      console.log(directions);
    }
  }, [
    game?.currentCharacter?.stage,
    game?.currentCharacter?.countOfTurns,
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
        newCell!.flipCell = !newCell?.flipCell;
        newGame!.currentCharacter!.countOfTurns = 0;
        setCellsToMoveArray([]);
      }
      // if we go to an cell with item
      if (stage === "action" && cell.holdItemID) {
        const newCell = newGame.board.find((item) => item.id === cell.id);
        newCell!.flipCell = !newCell?.flipCell;
        newGame!.currentCharacter!.countOfTurns = 0;
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
      clickHandlerCallback={clickHandler}
    />
  );
};

export default FieldCellContainer;
