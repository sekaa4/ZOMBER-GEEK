import SimpleText from "../../components/simpleText/SimpleText";
import classes from "./ListOfCharacters.module.scss";

interface ListOfCharactersProps {
  playersNumber: number;
}

const ListOfCharacters = (props: ListOfCharactersProps) => {
  const { playersNumber } = props;
  return (
    <div className={classes["list-players"]}>
      <SimpleText text="List of Players:" />
      <ol>
        {Array(playersNumber)
          .fill(null)
          .map((arg, i) => {
            const key = i + 1;
            return <li key={key}>Player{key} - Choose Character</li>;
          })}
      </ol>
    </div>
  );
};

export default ListOfCharacters;
