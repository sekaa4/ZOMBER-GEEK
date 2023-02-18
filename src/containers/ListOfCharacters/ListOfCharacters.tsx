import SimpleText from "../../components/simpleText/SimpleText";
import classes from "./ListOfCharacters.module.scss";

interface ListOfCharactersProps {
  playersNumber: number;
}

const ListOfCharacters = (props: ListOfCharactersProps) => {
  const { playersNumber } = props;
  return (
    <div className={classes["list-characters"]}>
      <SimpleText text="List of Characters:" />
      <ol>
        {Array(playersNumber)
          .fill(null)
          .map((arg, i) => {
            const key = i + 1;
            return <li key={key}> </li>;
          })}
      </ol>
    </div>
  );
};

export default ListOfCharacters;
