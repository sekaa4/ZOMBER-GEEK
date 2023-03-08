import { FC } from "react";
import GameBoard from "../../containers/GameBoard/GameBoard";
import classes from "./board.module.scss";
import InfoContainer from "../../containers/InfoContainer/InfoContainer";

const BoardPage: FC = () => {
  return (
    <section className={classes.boardPage}>
      <GameBoard />
      <InfoContainer />
    </section>
  );
};

export default BoardPage;
