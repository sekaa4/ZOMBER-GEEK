import { FC } from "react";
import FieldCell from "../../components/Field-cell/FieldCell";
import classes from "./GameBoard.module.scss";

const GameBoard: FC = () => {
  const cellsData = new Array(144).fill(<FieldCell />);

  return <div className={classes.gameField}>{cellsData}</div>;
};

export default GameBoard;
