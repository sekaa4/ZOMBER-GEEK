import ZombieProps from "./ZombieProps";

interface ZombieObj {
  name: ZombieProps;
  health: number;
  countOfTurns: number;
  currentPositionId: number | null;
  id: number;
}

export default ZombieObj;
