import Zombie from "./AbstractZombie";
import ZombieProps from "../../models/ZombieProps";

export default class ZombieBoss extends Zombie {
  static instance: ZombieBoss;
  countOfTurns: number | undefined;

  currentPositionId: null | undefined | number;

  readonly id: null | undefined | number;

  constructor(
    health?: number,
  ) {
    if (ZombieBoss.instance && ZombieBoss.instance instanceof ZombieBoss) {
      return ZombieBoss.instance;
    }

    super(ZombieProps.ZombieNameBoss, health = ZombieProps.ZombieDefaultHP);
    this.countOfTurns = 0;
    this.currentPositionId = null;
    this.id = this.currentPositionId;

    this.start();
    ZombieBoss.instance = this;
    return this;
  }
}
