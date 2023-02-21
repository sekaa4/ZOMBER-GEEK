import { ChangeEvent, FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { countOfCells } from "../../constants/CellsToMoves";
import items from "../../constants/Items";
import weapons from "../../constants/Weapons";
import createCharacter from "../../entities/Character/createCharacter";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppDispatch } from "../../hooks/redux";
import { CharacterName } from "../../models/Character.type";
import CreateGameConstants from "../../models/CreateGameConstants";
import Pages from "../../models/Pages";
import { boardSlice } from "../../store/reducers/BoardSlice";
import { characterSlice } from "../../store/reducers/CharacterSlice";
import { zombieSlice } from "../../store/reducers/ZombieSlice";
import { gameSlice } from "../../store/reducers/GameSlice";
import createFieldBoard from "../../utils/createFieldBoard/createFieldBoard";
import createZombiesArray from "../../utils/createZombiesArray";
import ChooseCharacters from "../ChooseCharacters/ChooseCharacters";
import LabelContainer from "../LabelContainer/LabelContainer";
import ListOfCharacters from "../ListOfCharacters/ListOfCharacters";
import ViewCharacter from "../ViewCharacter/ViewCharacter";
import classes from "./ChooseContainer.module.scss";

const ChooseContainer: FC = () => {
  const dispatch = useAppDispatch();
  const [players, setPlayers] = useState<number>(0);
  const [character, setCharacter] = useState<CharacterName>();
  const [characters, setCharacters] = useState<CharacterName[]>([]);

  const isDisabled = players === 0 || players > characters.length;
  const navigate = useNavigate();

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

  const startGameHandler = () => {
    const zombies = createZombiesArray(24);
    const cells = createFieldBoard(countOfCells, zombies, items, weapons);
    const charactersObj = createCharacter(characters);
    const initialObj = {
      board: cells,
      usersNamesList: characters,
      usersCharacters: charactersObj,
    };
    const game = new StandardGame(initialObj);

    dispatch(boardSlice.actions.writeFieldCells(cells));
    dispatch(characterSlice.actions.writeCharacters(charactersObj));
    dispatch(zombieSlice.actions.writeZombies(zombies));
    dispatch(gameSlice.actions.writeGameState(game));

    navigate(Pages.game);
  };

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
        <Button
          title={CreateGameConstants.START_GAME}
          disabled={isDisabled}
          onClickHandler={startGameHandler}
        />
      </div>
    </div>
  );
};

export default ChooseContainer;
