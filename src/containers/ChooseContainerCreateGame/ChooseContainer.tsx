import { ChangeEvent, FC, useState } from "react";
import Button from "../../components/button/Button";
import CreateGameConstants from "../../models/CreateGameConstants";
import LabelContainer from "../LabelContainer/LabelContainer";
import ListOfCharacters from "../ListOfCharacters/ListOfCharacters";
import classes from "./ChooseContainer.module.scss";

const ChooseContainer: FC = () => {
  const [players, setPlayers] = useState<number>(0);
  const [characters, setCharacters] = useState<string[]>([]);
  console.log(players);

  const setPlayersHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setPlayers(+input.value);
  };

  const setCharactersHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const nameCharacter = e.target.value;
    setCharacters((oldCharacters) => [...oldCharacters, nameCharacter]);
  };

  return (
    <div className={classes.container}>
      <LabelContainer onChangeHandler={setPlayersHandler} />
      <div className={classes["characters-container"]}>
        <ListOfCharacters playersNumber={players} />
        <div>block2</div>
        <div>block3</div>

        {/* <Button title={MainPage.HISTORY} />
        <Button title={MainPage.RULES} /> */}
      </div>
      <div className={classes.button}>
        <Button title={CreateGameConstants.START_GAME} />
      </div>
    </div>
  );
};

export default ChooseContainer;
