import { Character, CharacterName, Chars } from "../../models/Character.type";
import FieldCell from "../../models/FieldCell.type";
import ZombieObj from "../../models/Zombie.type";

export type KindOfItems = "melee" | "crosshairs";
export type KindOfWinObj = "gasoline" | "keys";

export type WinItemsObj = Partial<Record<CharacterName, KindOfWinObj[]>>;
export interface StandardGameParams {
  board: FieldCell<number>[];
  usersNamesList: CharacterName[];
  usersCharacters: Chars;
  turn?: number;
  users?: string[];
  currentCharacter?: Character;
  countCharacter?: number;
  countLifeCharacter?: number;
  usersNamesLifeList?: CharacterName[];
  nextTurn?: boolean;
  nextCharacter?: boolean;
  finishGame?: boolean;
  zombies?: ZombieObj[];
  rollDisabled?: boolean;
  kindOfItems?: KindOfItems;
  winItems?: WinItemsObj;
  dropItems?: KindOfWinObj[];
}

export default abstract class Game {
  static id = 0;

  readonly id: number;

  turn: number;

  users: string[];

  board: FieldCell<number>[];

  currentCharacter?: Character;

  countCharacters: number;

  countLifeCharacters: number;

  usersCharacters: Chars;

  usersNamesList: CharacterName[];

  usersNamesLifeList: CharacterName[];

  nextTurn: boolean;

  finishGame: boolean;

  zombies: ZombieObj[];

  nextCharacter: boolean;

  rollDisabled: boolean;

  kindOfItems: KindOfItems | null;

  winItems: WinItemsObj;

  dropItems: KindOfWinObj[] | null;

  constructor(params: StandardGameParams = {} as StandardGameParams) {
    const {
      board,
      turn,
      users,
      currentCharacter,
      countLifeCharacter,
      countCharacter,
      usersCharacters,
      usersNamesList,
      usersNamesLifeList,
      nextTurn,
      finishGame,
      zombies,
      nextCharacter,
      rollDisabled,
      kindOfItems,
      winItems,
      dropItems,
    } = params;

    this.id = Game.getIdNumber();
    this.turn = turn ?? 1;
    this.users = users ?? [];
    this.board = board;
    this.currentCharacter = currentCharacter ?? undefined;
    this.countCharacters = countCharacter ?? usersNamesList.length;
    this.countLifeCharacters = countLifeCharacter ?? this.countCharacters;
    this.usersCharacters = usersCharacters;
    this.usersNamesList = usersNamesList;
    this.usersNamesLifeList = usersNamesLifeList ?? this.usersNamesList;
    this.nextTurn = nextTurn ?? false;
    this.finishGame = finishGame ?? false;
    this.zombies = zombies ?? [];
    this.nextCharacter = nextCharacter ?? false;
    this.rollDisabled = rollDisabled ?? true;
    this.kindOfItems = kindOfItems ?? null;
    this.winItems = winItems ?? {};
    this.dropItems = dropItems ?? null;
  }

  abstract start(): void;

  static getIdNumber(): number {
    Game.id += 1;
    const curId = Game.id;
    return curId;
  }
}
