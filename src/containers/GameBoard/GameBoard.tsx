import { FC, useEffect, useState } from "react";
import FieldCellContainer from "../Field-cell/FieldCell";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { gameSlice } from "../../store/reducers/GameSlice";
import getCharNameFromId from "../../utils/getCharNameFromId";
import classes from "./GameBoard.module.scss";

const GameBoard: FC = () => {
  const dispatch = useAppDispatch();
  const { fieldCells } = useAppSelector((state) => state.boardReducer);
  const { characters } = useAppSelector((state) => state.characterReducer);
  const { game } = useAppSelector((state) => state.gameReducer);

  if (game instanceof StandardGame) {
    game.board = fieldCells;
    dispatch(gameSlice.actions.writeGameState(game));
  }

  const [activeCell, setActiveCell] = useState<number | null>(null);
  const [cellsToMove, setCellsToMove] = useState<(number | "")[]>([]);
  const changeActiveCell = (cellID: number) => {
    setActiveCell(cellID);
  };

  if (!game?.currentCharacter?.currentPositionId && cellsToMove.length === 0) {
    setCellsToMove([121, 122, 133, 134]);
  }

  useEffect(() => {
    const numb = game?.currentCharacter?.currentPositionId;
    const stage = game?.currentCharacter?.stage;
    const name = game?.currentCharacter?.name;
    const turns = game?.currentCharacter?.countOfTurns;

    if (!numb) {
      alert(`Place ${name} on the board `);
    }
    if (numb && stage === "roll") {
      alert(`Roll spin and choose fieldCell for step Character - ${name}`);
    }
    if (turns === 0 && stage === "action") {
      setCellsToMove([]);
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
          isActive={item.id === activeCell}
          isCellToMove={cellsToMove.includes(item.id)}
          charName={getCharNameFromId(characters, item.id)}
          changeActiveCellID={changeActiveCell}
          setCellsToMoveArray={setCellsToMove}
          key={`cellID: ${item.id}`}
        />
      ))}
    </div>
  );
};

export default GameBoard;
