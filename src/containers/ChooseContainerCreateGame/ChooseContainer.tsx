import { ChangeEvent, FC, useState } from "react";
import Button from "../../components/button/Button";
import { CharacterName } from "../../models/Character.type";
import CreateGameConstants from "../../models/CreateGameConstants";
import ChooseCharacters from "../ChooseCharacters/ChooseCharacters";
import LabelContainer from "../LabelContainer/LabelContainer";
import ListOfCharacters from "../ListOfCharacters/ListOfCharacters";
import ViewCharacter from "../ViewCharacter/ViewCharacter";
import classes from "./ChooseContainer.module.scss";

const ChooseContainer: FC = () => {
  const [players, setPlayers] = useState<number>(0);
  const [character, setCharacter] = useState<CharacterName>();
  const [characters, setCharacters] = useState<CharacterName[]>([]);

  const setPlayersHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    setPlayers(+input.value);
  };

  const setCharacterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const nameCharacter = e.target.value as CharacterName;
    setCharacter(nameCharacter);
  };

  const setCharactersHandler = () => {
    setCharacters((oldNamesArr) => {
      return [...oldNamesArr, character as CharacterName];
    });
  };

  const isDisabled = players === 0 || players > characters.length;

  return (
    <div className={classes.container}>
      <LabelContainer onChangeHandler={setPlayersHandler} />
      <div className={classes["characters-container"]}>
        <ListOfCharacters playersNumber={players} characters={characters} />
        <ChooseCharacters onChangeHandler={setCharacterHandler} />
        <ViewCharacter
          players={players}
          character={character}
          characters={characters}
          onChangeHandler={setCharactersHandler}
        />
      </div>
      <div className={classes.button}>
        <Button title={CreateGameConstants.START_GAME} disabled={isDisabled} />
      </div>
    </div>
  );
};

export default ChooseContainer;
