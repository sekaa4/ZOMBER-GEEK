import CharacterProps from "../models/CharacterProps";

export const ENG = {
  [CharacterProps.CharacterNameWithKnife]:
    "Alex is really into martial arts: she never goes anywhere without her trusty knife. You may use it at any time, as if Alex had the knife tile.",
  [CharacterProps.CharacterNameWithHeal]:
    "Anita is a skilled nurse: when she uses afirst aid kit, it restores 2 hit points instead of 1.",
  [CharacterProps.CharacterNameFastest]:
    "Max is the youngest in the group, but also the fastest. He may, if needed, add +1 square to his movement speed every turn.",
  [CharacterProps.CharacterNameWithHandGun]:
    "Fred is a police officer: he starts the game with a handgun. You may use it at any time, as if Mary had the handgun tile.",
  [CharacterProps.CharacterNameWithBigHP]:
    "Johnny is incredibly tough: he starts the game with 2 more hit points than anyone else.",
  default: "Select a character to see his abilities",
};

export const RUS = {
  [CharacterProps.CharacterNameWithKnife]:
    "Увлекается боевыми искусствами: у неё всегда есть с собой нож (можно использовать его в любой момент, как если бы у Саши была такая карточка оружия).",
  [CharacterProps.CharacterNameWithHeal]:
    "Работает медсестрой: использованная ею аптечка даёт не одну жизнь, а сразу две.",
  [CharacterProps.CharacterNameFastest]:
    "Самый младший игрок, зато самый быстрый: к каждому своему ходу при передвижении может (при желании) добавлять +1.",
  [CharacterProps.CharacterNameWithHandGun]:
    "Работает в Полиции: в начале игры у него с собой есть пистолет (можно использовать его в любой момент, как если бы у Нади была такая карточка оружия).",
  [CharacterProps.CharacterNameWithBigHP]:
    "Невероятно здоровый и выносливый: в начале игры у него на две жизни больше, чем у остальных.",
  default: "Выберите персонажа, чтобы увидеть его способности",
};
