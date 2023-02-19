import ZombieProps from "./ZombieProps";

// type nameZombie = keyof ZombieProps;

interface ZombieObj {
  name: ZombieProps;
  health: number;
  countOfTurns: number;
  currentPositionId: number | null;
  id: number;
}

export default ZombieObj;
