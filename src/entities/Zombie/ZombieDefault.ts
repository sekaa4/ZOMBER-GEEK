import Zombie from "./AbstractZombie";
import ZombieProps from "../../models/ZombieProps";

export default class ZombieDefault extends Zombie {
  countOfTurns: number | undefined;

  currentPositionId: null | number;

  readonly id: null | number;

  constructor(health?: number) {
    super(
      ZombieProps.ZombieNameDefault,
      (health = ZombieProps.ZombieDefaultHP),
    );
    this.countOfTurns = 0;
    this.currentPositionId = null;
    this.id = this.currentPositionId;

    this.start();
    return this;
  }

  move() {}
}
