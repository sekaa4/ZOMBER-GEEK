import IWeapons from "../../models/Weapons.type";

const mochaWeapons: IWeapons = {
  grenades: 0,
  knifes: 0,
  crossbows: 0,
  axes: 0,
  handguns: 0,
  assaultRifles: 0,
  shotguns: 0,
  BFG: 0,
};

export default class Weapons {
  grenades?: number;

  knifes?: number;

  crossbows?: number;

  axes?: number;

  handguns?: number;

  assaultRifles?: number;

  shotguns?: number;

  BFG?: number;

  constructor({
    grenades,
    knifes,
    crossbows,
    axes,
    handguns,
    assaultRifles,
    shotguns,
    BFG,
  }: IWeapons = mochaWeapons) {
    this.grenades = grenades ?? mochaWeapons.grenades;
    this.knifes = knifes ?? mochaWeapons.knifes;
    this.crossbows = crossbows ?? mochaWeapons.crossbows;
    this.axes = axes ?? mochaWeapons.axes;
    this.handguns = handguns ?? mochaWeapons.handguns;
    this.assaultRifles = assaultRifles ?? mochaWeapons.handguns;
    this.shotguns = shotguns ?? mochaWeapons.shotguns;
    this.BFG = BFG ?? mochaWeapons.shotguns;
  }
}
