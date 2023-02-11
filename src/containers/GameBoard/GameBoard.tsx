import { FC } from "react";
import FieldCell from "../../components/Field-cell/FieldCell";
import classes from "./GameBoard.module.scss";

const GameBoard: FC = () => {
  const cellsData = new Array(144).fill(1);

  return (
    <div className={classes.gameField}>
      {cellsData.map((item, index) => (
        <FieldCell key={`${`${index}a`}`} />
      ))}
    </div>
  );
};

export default GameBoard;
