import IItems from "../../models/Items.type";

const mochaItems: IItems = {
  firstAidKits: 0,
  boards: 0,
  gasoline: 0,
  keys: 0,
};

export default class Items {
  firstAidKits: number;

  boards: number;

  gasoline: number;

  keys: number;

  constructor({ firstAidKits, boards, gasoline, keys }: IItems = mochaItems) {
    this.firstAidKits = firstAidKits;
    this.boards = boards;
    this.gasoline = gasoline;
    this.keys = keys;
  }
}
