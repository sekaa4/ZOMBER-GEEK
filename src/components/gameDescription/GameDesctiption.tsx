interface GameDescriptionProps {
  description: string;
  value: string | number;
}

const GameDescription = (props: GameDescriptionProps) => {
  const { description, value } = props;
  return (
    <div>
      {description}: {value}
    </div>
  );
};

export default GameDescription;
