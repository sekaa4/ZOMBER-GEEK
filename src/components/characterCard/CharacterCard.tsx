import { Character } from "../../models/Character.type";
import Button from "../button/Button";
import classes from "./characterCard.module.scss";

interface CharacterCardProps {
  character: Character;
  classNames: string[];
}

const CharacterCard = (props: CharacterCardProps) => {
  const { character, classNames } = props;
  let status: string;
  if (character.health === 0) {
    status = "death";
  } else if (character.active) {
    status = "active";
  } else {
    status = "disabled";
  }
  return (
    <div className={[classes.characterCard, ...classNames].join(" ")}>
      <div>
        <img
          src={character.imageAvatar}
          alt={`character ${character.name}`}
          className={classes["character-img"]}
        />
        <div className={classes["main-information"]}>
          <ul>
            <li>Character: {character.name}</li>
            <li>Character Health: {character.health}</li>
            <li>Character Status: {status}</li>
          </ul>
        </div>
      </div>
      <div className={classes.description}>
        <div className={classes.items}>
          <ul>
            Necessary items to finish the game:
            {Object.entries(character.items).map(([key, value]) => {
              let disabled = true;
              const classesArr = [classes["items-button"]];
              if (key === "boards" || key === "firstAidKits")
                return <li key={key} />;
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

export default CharacterCard;
