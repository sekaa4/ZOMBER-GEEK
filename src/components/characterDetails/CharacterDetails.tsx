import { FC } from "react";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppSelector } from "../../hooks/redux";
import { Character } from "../../models/Character.type";
import classes from "./characterDetails.module.scss";

const CharacterDetails: FC = () => {
  const { game } = useAppSelector((state) => state.gameReducer);
  const newGame = structuredClone(game) as StandardGame;
  const character = newGame.currentCharacter as Character;

  return (
    <div className={classes.character}>
      <div>
        <img
          src={character.imageAvatar}
          alt={`character ${character.name}`}
          className={classes["character-img"]}
        />
      </div>
      <div className={classes.description}>
        <div className={classes["main-information"]}>
          <ul>
            <li>Character: {character.name}</li>
            <li>Character Health: {character.health}</li>
            <li>Character turns: {character.countOfTurns}</li>
            <li>Character stage: {character.stage}</li>
          </ul>
        </div>
        <div className={classes.items}>
          <ul>
            Character items:
            {Object.entries(character.items).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
          <ul>
            Character weapons:
            {Object.entries(character.weapons).map(([key, value]) => (
              <li key={key}>
                {key}: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
