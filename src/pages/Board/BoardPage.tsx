import { FC } from "react";
import GameBoard from "../../containers/GameBoard/GameBoard";
import CharacterCard from "../../components/characterCard/CharacterCard";
import classes from "./board.module.scss";
import Header from "../../components/boardPageHeader/Header";
import ActionContainer from "../../containers/ActionContainer/ActionContainer";
import Button from "../../components/button/Button";
import BoardText from "../../models/BoardText";

import createFieldBoard from "../../utils/createFieldBoard/createFieldBoard";
import createZombiesArray from "../../utils/createZombiesArray";
import items from "../../constants/Items";
import weapons from "../../constants/Weapons";
import { countOfCells } from "../../constants/CellsToMoves";

const zombies = createZombiesArray(24);
const cells = createFieldBoard(countOfCells, zombies, items, weapons);

const BoardPage: FC = () => (
  <section className={classes.boardPage}>
    <GameBoard cells={cells} />
    <div className={classes.boardPageInfo}>
      <Header />
      <div className={classes.boardPageSpinner}>
        <ActionContainer />
      </div>
      <div className={classes.boardPageCharactersContainer}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
      <div className={classes.buttons}>
        <Button title={BoardText.pause} />
        <Button title={BoardText.continue} />
      </div>
    </div>
  </section>
);

export default BoardPage;
