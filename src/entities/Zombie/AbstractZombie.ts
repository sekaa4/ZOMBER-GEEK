interface AbstractZombie {
  start(): void;

  move(): void;

  attack(): void;

  kill(): void;
}

export default abstract class Zombie implements AbstractZombie {
  readonly name: string;

  health: number;

  constructor(
    name: string,
    health: number,
  ) {
    this.name = name;
    this.health = health;
  }

  start() {}

  move() {}

  attack() {}

  kill() {}
}
