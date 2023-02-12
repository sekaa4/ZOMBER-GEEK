interface GameActionProps {
  action: string | number;
}

const GameAction = (props: GameActionProps) => {
  const { action } = props;
  return <div>GameAction: {action}</div>;
};

export default GameAction;
