import { FC } from "react";
import GameBoard from "../../containers/GameBoard/GameBoard";
import CharacterCard from "../../components/characterCard/CharacterCard";
import classes from "./board.module.scss";
import Header from "../../components/boardPageHeader/Header";
import RollSpin from "../../components/roll-spin/RollSpin";

const BoardPage: FC = () => (
  <section className={classes.boardPage}>
    <GameBoard />
    <div className={classes.boardPageInfo}>
      <Header />
      <div className={classes.boardPageSpinner}>
        <RollSpin />
        <RollSpin />
      </div>
      <div className={classes.boardPageCharactersContainer}>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </div>
    </div>
  </section>
);

export default BoardPage;
