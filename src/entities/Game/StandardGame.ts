import { Character } from "../../models/Character.type";
import Game, { StandardGameParams } from "./AbstractGame";

export default class StandardGame extends Game {
  constructor(params?: StandardGameParams) {
    super(params);
    this.start();
  }

  start() {
    if (
      !this.currentCharacter &&
      this.usersCharacters &&
      this.usersNamesList.length > 0
    ) {
      this.currentCharacter = this.usersCharacters[
        this.usersNamesList[0]
      ] as Character;
    }
  }
}
