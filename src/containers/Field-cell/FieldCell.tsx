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
    return cell.characterName ? "" : cellId;
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
  }, [game?.currentCharacter?.stage, cell.flipCell]);

  const clickHandler = () => {
    const stage = game?.currentCharacter?.stage;
    const positionId = game?.currentCharacter?.currentPositionId;
    const turns = game?.currentCharacter?.countOfTurns;

    if (isCellToMove) {
      currentCharacter!.active = true;
      currentCharacter!.currentPositionId = cell.id;
      if (prevCell) prevCell.characterName = null;
      curCell.characterName = currentCharacter?.name as CharacterName;

      if (stage === "prepare" && !positionId) {
        newGame!.currentCharacter!.stage = "roll";
        newGame!.rollDisabled = false;
        setCellsToMoveArray([]);
      }
      if (stage === "action" && positionId && turns !== 0) {
        setCellsToMoveArray(directions);
        newGame!.currentCharacter!.countOfTurns -= 1;
      }
      changeActiveCellID(cell.id);
      dispatch(gameSlice.actions.writeGameState(newGame));
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
