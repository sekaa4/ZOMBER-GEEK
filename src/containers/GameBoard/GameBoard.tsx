import { FC, useEffect, useState } from "react";
import FieldCellComp from "../../components/Field-cell/FieldCell";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppSelector } from "../../hooks/redux";
import { Character, Chars } from "../../models/Character.type";
import FieldCell from "../../models/FieldCell.type";
import classes from "./GameBoard.module.scss";

type GameBoardProps = {
  cells: FieldCell<number>[];
  characters: Chars | null;
};

const GameBoard: FC<GameBoardProps> = ({ cells, characters }) => {
  const [activeCell, setActiveCell] = useState<number>(133);
  const [cellsToMove, setCellsToMove] = useState<(number | "")[]>([121, 134]);
  const changeActiveCell = (cellID: number) => {
    setActiveCell(cellID);
  };
  let name: string;
  let activeChar: Character | undefined;
  const firstNonPositionedChar = Object.values(characters as Chars).find(
    (item) => !item.currentPositionId,
  );
  firstNonPositionedChar!.currentPositionId = activeCell;
  name = firstNonPositionedChar!.name;
  activeChar = firstNonPositionedChar;
  console.log("firstNonPositionedChar", firstNonPositionedChar);

  const { game } = useAppSelector((state) => state.gameReducer);

  useEffect(() => {
    if (
      game instanceof StandardGame &&
      game.currentCharacter &&
      !game.currentCharacter.currentPositionId
    ) {
      alert(`Place your character on the board ${game.currentCharacter.name}`);
    }

    if (
      game instanceof StandardGame &&
      game.currentCharacter &&
      game.currentCharacter.currentPositionId &&
      game.currentCharacter.stage === "roll"
    ) {
      alert(
        `Roll spin and choose fieldCell for step Character - ${game.currentCharacter.name}`,
      );
    }
  }, [game?.currentCharacter]);

  return (
    <div className={classes.gameField}>
      {cells.map((item) => (
        <FieldCellComp
          cell={item}
          isActive={item.id === activeCell}
          isCellToMove={cellsToMove.includes(item.id)}
          charName={item.id === activeChar!.currentPositionId ? name : null}
          changeActiveCellID={changeActiveCell}
          setCellsToMoveArray={setCellsToMove}
          key={`cellID: ${item.id}`}
        />
      ))}
    </div>
  );
};

export default GameBoard;
