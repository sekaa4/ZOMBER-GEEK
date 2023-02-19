import { FC, useState } from "react";
import FieldCellComp from "../../components/Field-cell/FieldCell";
import FieldCell from "../../models/FieldCell.type";
import classes from "./GameBoard.module.scss";

type GameBoardProps = {
  cells: FieldCell<number>[];
};

const GameBoard: FC<GameBoardProps> = ({ cells }) => {
  const [activeCell, setActiveCell] = useState<number>(133);
  const [cellsToMove, setCellsToMove] = useState<(number | "")[]>([121, 134]);
  const changeActiveCell = (cellID: number) => {
    setActiveCell(cellID);
  };
  return (
    <div className={classes.gameField}>
      {cells.map((item) => (
        <FieldCellComp
          cell={item}
          isActive={item.id === activeCell}
          isCellToMove={cellsToMove.includes(item.id)}
          changeActiveCellID={changeActiveCell}
          setCellsToMoveArray={setCellsToMove}
          key={`cellID: ${item.id}`}
        />
      ))}
    </div>
  );
};

export default GameBoard;
