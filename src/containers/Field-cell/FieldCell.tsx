import { FC } from "react";
import FieldCell from "../../models/FieldCell.type";
import getAdjacentCells from "../../utils/getAdjacentCells";
import Directions from "../../models/Directions.type";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import StandardGame from "../../entities/Game/StandardGame";
import FieldCellComp from "../../components/FieldCellComp/FieldCellComp";
import { gameSlice } from "../../store/reducers/GameSlice";

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
  const { currentCharacter } = game as StandardGame;

  const directions = directionsValues.map((str) => {
    const cellId = cell[str] ? getAdjacentCells(str, cell.id) : "";
    return cell.characterName ? "" : cellId;
  });

  const clickHandler = () => {
    if (isCellToMove) {
      currentCharacter!.currentPositionId = cell.id;
      if (
        game?.currentCharacter?.stage === "prepare" &&
        game.currentCharacter.currentPositionId
      ) {
        game!.currentCharacter!.stage = "roll";
        game.rollDisabled = false;
      }
      changeActiveCellID(cell.id);
      setCellsToMoveArray(directions);
      dispatch(gameSlice.actions.writeGameState({ ...game } as StandardGame));
    }
  };
  return (
    <FieldCellComp
      flipCell={cell.flipCell}
      zombieId={cell.zombieID}
      charName={cell.characterName}
      currentCharName={currentCharacter!.name}
      holdItemId={cell.holdItemID}
      isActive={isActive}
      isCellToMove={isCellToMove}
      clickHandlerCallback={clickHandler}
    />
  );
};

export default FieldCellContainer;
