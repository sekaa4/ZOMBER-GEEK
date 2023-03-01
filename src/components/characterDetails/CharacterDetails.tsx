import { FC, useContext } from "react";
import ActionContext from "../../containers/ActionContainer/ActionContext";
import StandardGame from "../../entities/Game/StandardGame";
import { useAppSelector } from "../../hooks/redux";
import { Character } from "../../models/Character.type";
import Button from "../button/Button";
import classes from "./characterDetails.module.scss";

const CharacterDetails: FC = () => {
  const { game } = useAppSelector((state) => state.gameReducer);
  const newGame = structuredClone(game) as StandardGame;
  const character = newGame.currentCharacter as Character;
  const { changeCountItemsHandler } = useContext(ActionContext);

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
            {Object.entries(character.items).map(([key, value]) => {
              let disabled = true;
              const classesArr = [classes["items-button"]];
              if (key === "boards") return <li key={key} />;
              if (value > 0) disabled = false;
              if (key !== "firstAidKits") {
                classesArr.push(classes["win-items"]);
              }
              return (
                <li key={key}>
                  <Button
                    disabled={disabled}
                    value={key}
                    title={`${key}: ${value}`}
                    classNames={classesArr}
                    onClickHandler={changeCountItemsHandler}
                  />
                </li>
              );
            })}
          </ul>
          <ul>
            Character weapons:
            {Object.entries(character.weapons).map(([key, value]) => {
              let disabled = true;
              const classesArr = [classes["items-button"]];
              if (value > 0 && disabled) {
                classesArr.push(classes.default);
              }
              if (
                value > 0 &&
                character.stage === "fight" &&
                !newGame.rollDisabled &&
                key === "grenades"
              )
                disabled = false;
              if (
                value > 0 &&
                newGame.kindOfItems === "melee" &&
                (character.stage === "fight" || character.stage === "finish") &&
                (key === "knifes" || key === "axes")
              )
                disabled = false;
              if (
                value > 0 &&
                character.stage === "fight" &&
                newGame.kindOfItems === "firearm" &&
                !newGame.rollDisabled &&
                key !== "knifes" &&
                key !== "axes"
              )
                disabled = false;
              if (key === "knifes" || key === "axes") {
                classesArr.push(classes["win-items"]);
              }
              return (
                <li key={key}>
                  <Button
                    value={key}
                    disabled={disabled}
                    title={`${key}: ${value}`}
                    classNames={classesArr}
                    onClickHandler={changeCountItemsHandler}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
