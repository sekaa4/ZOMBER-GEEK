import { ChangeEvent, FC, useState } from "react";
import Button from "../../components/button/Button";
import CreateGameConstants from "../../models/CreateGameConstants";
import ChooseCharacters from "../ChooseCharacters/ChooseCharacters";
import LabelContainer from "../LabelContainer/LabelContainer";
import ListOfCharacters from "../ListOfCharacters/ListOfCharacters";
import ViewCharacter from "../ViewCharacter/ViewCharacter";
import classes from "./ChooseContainer.module.scss";

const ChooseContainer: FC = () => {
  const [players, setPlayers] = useState<number>(0);
  const [character, setCharacter] = useState<string>("");
  console.log(players);
  console.log(character);

  const setPlayersHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setPlayers(+input.value);
  };

  const setCharacterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const nameCharacter = e.target.value;
    setCharacter(nameCharacter);
  };

  return (
    <div className={classes.container}>
      <LabelContainer onChangeHandler={setPlayersHandler} />
      <div className={classes["characters-container"]}>
        <ListOfCharacters playersNumber={players} />
        <ChooseCharacters onChangeHandler={setCharacterHandler} />
        <ViewCharacter />

        {/* <Button title={MainPage.HISTORY} />
        <Button title={MainPage.RULES} /> */}
      </div>
      <div className={classes.button}>
        <Button title={CreateGameConstants.START_GAME} disabled />
      </div>
    </div>
  );
};

export default ChooseContainer;
