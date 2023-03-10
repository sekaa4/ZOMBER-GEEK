import ZombieBoss from "../entities/Zombie/ZombieBoss";
import ZombieDefault from "../entities/Zombie/ZombieDefault";
import ZombieObj from "../models/Zombie.type";

const createZombiesArray = (countDefaultZombies: number) => {
  const bossCount = 1;
  const defaultZombiesArr = new Array(countDefaultZombies - bossCount)
    .fill("dummy")
    .map(() => {
      return new ZombieDefault();
    });
  let zombiesArr = [new ZombieBoss(), ...defaultZombiesArr] as ZombieObj[];
  zombiesArr = zombiesArr.map((item, index) => {
    const current = item;
    current.id = index + 1;
    return current;
  });
  return zombiesArr;
};

export default createZombiesArray;
