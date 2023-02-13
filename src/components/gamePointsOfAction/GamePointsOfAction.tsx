interface GameActionProps {
  points: string | number;
}

const GamePointsOfAction = (props: GameActionProps) => {
  const { points } = props;
  return <div>GamePoints: {points}</div>;
};

export default GamePointsOfAction;
