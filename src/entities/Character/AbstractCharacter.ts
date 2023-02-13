import { Stage } from "../../models/Character.type";

interface AbstractCharacter {
  start(): void;

  move(): void;

  attack(): void;

  useWeapon(): void;

  useItems(): void;

  incrementHealth(): void;

  decrementHealth(): void;

  flipCart(): void;

  dropAllItems(): void;

  kill(): void;
}

export default abstract class Character implements AbstractCharacter {
  readonly name: string;

  health: number;

  stage: Stage;

  active: boolean;

  constructor(name: string, health: number) {
    this.name = name;
    this.health = health;
    this.stage = "prepare";
    this.active = false;
  }

  start() {}

  move() {}

  attack() {}

  useWeapon() {}

  useItems() {}

  incrementHealth() {}

  decrementHealth() {}

  flipCart() {}

  dropAllItems() {}

  kill() {}
}
