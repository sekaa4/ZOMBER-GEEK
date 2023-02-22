import { FC, useEffect } from "react";
import GameBoard from "../../containers/GameBoard/GameBoard";
import classes from "./board.module.scss";
import InfoContainer from "../../containers/InfoContainer/InfoContainer";
import { useAppSelector } from "../../hooks/redux";
import StandardGame from "../../entities/Game/StandardGame";
import { Chars } from "../../models/Character.type";
import FieldCell from "../../models/FieldCell.type";

const BoardPage: FC = () => {
  const { game } = useAppSelector((state) => state.gameReducer);

  return (
    <section className={classes.boardPage}>
      <GameBoard
        cells={game?.board as FieldCell<number>[]}
        characters={game?.usersCharacters as Chars}
      />
      <InfoContainer />
    </section>
  );
};

export default BoardPage;
