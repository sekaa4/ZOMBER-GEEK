import { createContext } from "react";

interface ActionContextProps {
  setActionHandler(prop: string): void;
  setCountOfTurnHandler(prop: string | number): void;
  action: string;
  countOfTurn: string | number;
}

const ActionContext = createContext({} as ActionContextProps);

export default ActionContext;
