import { FC, useEffect, useState } from "react";
import FieldCellContainer from "../Field-cell/FieldCell";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { gameSlice } from "../../store/reducers/GameSlice";
import classes from "./GameBoard.module.scss";

const GameBoard: FC = () => {
  const dispatch = useAppDispatch();
  // const { fieldCells } = useAppSelector((state) => state.boardReducer);
  const { characters } = useAppSelector((state) => state.characterReducer);
  const { game } = useAppSelector((state) => state.gameReducer);
  const newGame = structuredClone(game) as StandardGame;
  const fieldCells = newGame.board;

  const activeCell = newGame.board.find((item) => item.active === true) || null;
  const [cellsToMove, setCellsToMove] = useState<(number | "")[]>([]);
  const changeActiveCell = (cellID: number) => {
    // setActiveCell(cellID);
  };

  if (!game?.currentCharacter?.currentPositionId && cellsToMove.length === 0) {
    setCellsToMove([121, 122, 133, 134]);
  }

  useEffect(() => {
    const numb = game?.currentCharacter?.currentPositionId;
    const stage = game?.currentCharacter?.stage;
    const name = game?.currentCharacter?.name;
    const turns = game?.currentCharacter?.countOfTurns;
    const curCell = game?.board.find((cell) => cell.id === numb);

    if (!numb) {
      alert(`Place ${name} on the board `);
    }
    if (numb && stage === "roll") {
      alert(`Roll spin and choose fieldCell for step Character - ${name}`);
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
          charName={item.characterName}
          changeActiveCellID={changeActiveCell}
          setCellsToMoveArray={setCellsToMove}
          key={`cellID: ${item.id}`}
        />
      ))}
    </div>
  );
};

export default GameBoard;
