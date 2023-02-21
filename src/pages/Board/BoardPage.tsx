import { FC } from "react";
import GameBoard from "../../containers/GameBoard/GameBoard";
import classes from "./board.module.scss";
import InfoContainer from "../../containers/InfoContainer/InfoContainer";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import StandardGame from "../../entities/Game/StandardGame";
import { gameSlice } from "../../store/reducers/GameSlice";

// const zombies = createZombiesArray(24);
// const cells = createFieldBoard(countOfCells, zombies, items, weapons);

const BoardPage: FC = () => {
  const dispatch = useAppDispatch();
  const { fieldCells } = useAppSelector((state) => state.boardReducer);
  const { characters } = useAppSelector((state) => state.characterReducer);
  const { game } = useAppSelector((state) => state.gameReducer);
  if (game instanceof StandardGame) {
    game.board = fieldCells;
    dispatch(gameSlice.actions.writeGameState(game));
  }
  console.log(characters);

  return (
    <section className={classes.boardPage}>
      <GameBoard cells={fieldCells} characters={characters} />
      <InfoContainer />
    </section>
  );
};

export default BoardPage;
