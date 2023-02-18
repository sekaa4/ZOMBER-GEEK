import SimpleText from "../../components/simpleText/SimpleText";
import { CharacterName } from "../../models/Character.type";
import classes from "./ListOfCharacters.module.scss";

interface ListOfCharactersProps {
  playersNumber: number;
  characters: CharacterName[];
}

const ListOfCharacters = (props: ListOfCharactersProps) => {
  const { playersNumber, characters } = props;
  return (
    <div className={classes["list-players"]}>
      <SimpleText text="List of Players:" />
      {playersNumber ? (
        <ol>
          {Array(playersNumber)
            .fill(null)
            .map((arg, i) => {
              const key = i + 1;
              return (
                <li key={key}>
                  Player{key} -
                  {characters[i] ? characters[i] : "Choose Character"}
                </li>
              );
            })}
        </ol>
      ) : (
        <span>Select number of players</span>
      )}
    </div>
  );
};

export default ListOfCharacters;
