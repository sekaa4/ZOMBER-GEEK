import IWeapons from "../../models/Weapons.type";

const mochaWeapons: IWeapons = {
  grenades: 0,
  knifes: 0,
  crossbows: 0,
  axes: 0,
  handguns: 0,
  assaultRifles: 0,
  shotguns: 0,
  RPG: 0,
};

export default class Weapons {
  grenades: number;

  knifes: number;

  crossbows: number;

  axes: number;

  handguns: number;

  assaultRifles: number;

  shotguns: number;

  RPG: number;

  constructor({
    grenades,
    knifes,
    crossbows,
    axes,
    handguns,
    assaultRifles,
    shotguns,
    RPG,
  }: IWeapons = mochaWeapons) {
    this.grenades = grenades;
    this.knifes = knifes;
    this.crossbows = crossbows;
    this.axes = axes;
    this.handguns = handguns;
    this.assaultRifles = assaultRifles;
    this.shotguns = shotguns;
    this.RPG = RPG;
  }
}
