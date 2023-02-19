import { FC } from "react";
import GameBoard from "../../containers/GameBoard/GameBoard";
import classes from "./board.module.scss";
import InfoContainer from "../../containers/InfoContainer/InfoContainer";

import createFieldBoard from "../../utils/createFieldBoard/createFieldBoard";
import createZombiesArray from "../../utils/createZombiesArray";
import items from "../../constants/Items";
import weapons from "../../constants/Weapons";
import { countOfCells } from "../../constants/CellsToMoves";

const zombies = createZombiesArray(24);
const cells = createFieldBoard(countOfCells, zombies, items, weapons);

const BoardPage: FC = () => {
  return (
    <section className={classes.boardPage}>
      <GameBoard cells={cells} />
      <InfoContainer />
    </section>
  );
};

export default BoardPage;
