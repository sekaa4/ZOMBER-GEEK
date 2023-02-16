import Items from "../../entities/Items/Items";
import Weapons from "../../entities/Weapon/Weapons";

const transformItemsObjToArray = (cardsObj: Items | Weapons) => {
  const cardsEntries = Object.entries(cardsObj);
  const cardsArrWithNames = cardsEntries.map((item) => {
    const itemName = item[0];
    const itemCount = item[1];
    const itemsNamesArr = new Array(itemCount).fill(itemName);
    return itemsNamesArr;
  });
  return cardsArrWithNames.flat();
};

export default transformItemsObjToArray;
