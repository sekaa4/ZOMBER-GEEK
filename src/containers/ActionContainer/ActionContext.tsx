import { createContext } from "react";

interface ActionContextProps {
  setActionHandler(prop: string): void;
  setCountOfTurnHandler(prop: string | number): void;
  changeStatus(): void;
  changeCountItemsHandler(e: React.MouseEvent<HTMLButtonElement>): void;
  action: string;
  countOfTurn: string | number;
  turn: number;
  isDisabled: boolean;
}

const ActionContext = createContext({} as ActionContextProps);

export default ActionContext;
