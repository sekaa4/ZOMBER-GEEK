interface GameTurnsProps {
  turn: number;
}

const GameTurns = (props: GameTurnsProps) => {
  const { turn } = props;
  return <div>GameTurns: {turn}</div>;
};

export default GameTurns;
