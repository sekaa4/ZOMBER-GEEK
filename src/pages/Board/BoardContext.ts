import { createContext } from "react";

interface Time {
  time: number;
  timeString: string;
}

interface BoardContextProps {
  time: Time;
}

const BoardContext = createContext({} as BoardContextProps);

export default BoardContext;
