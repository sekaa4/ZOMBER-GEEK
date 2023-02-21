import { FC } from "react";
import GameBoard from "../../containers/GameBoard/GameBoard";
import classes from "./board.module.scss";
import InfoContainer from "../../containers/InfoContainer/InfoContainer";
import { useAppSelector } from "../../hooks/redux";

const BoardPage: FC = () => {
  const { fieldCells } = useAppSelector((state) => state.boardReducer);
  const { characters } = useAppSelector((state) => state.characterReducer);
  const game = useAppSelector((state) => state);

  console.log(characters);
  console.log(fieldCells);
  console.log(game);

  return (
    <section className={classes.boardPage}>
      <GameBoard cells={fieldCells} characters={characters} />
      <InfoContainer />
    </section>
  );
};

export default BoardPage;
