import { useContext } from "react";
import BoardContext from "../../pages/Board/BoardContext";

const GameTime = () => {
  const { time } = useContext(BoardContext);

  return <div>GameTime: {time.timeString}</div>;
};

export default GameTime;
