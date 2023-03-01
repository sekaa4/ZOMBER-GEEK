import AlexPhoto from "../assets/images/characters/girl.webp";
import AnitaPhoto from "../assets/images/characters/doctor.webp";
import MaxPhoto from "../assets/images/characters/boy.webp";
import PolicemanPhoto from "../assets/images/characters/policemen.webp";
import JohnnyPhoto from "../assets/images/characters/real_men.webp";
import NightmarePhoto from "../assets/images/zombies/zombie-nightmare.webp";
import DefaultZombiePhoto from "../assets/images/zombies/zombie-leg-1.webp";
import FlipCardPhoto from "../assets/images/items/flip-card.webp";
import ZombieProps from "../models/ZombieProps";
import ItemsAndWeaponsNames from "../models/ItemsAndWeaponsNames";
import FirstAidKitPhoto from "../assets/images/items/first-aid-kit.webp";
import BoardsPhoto from "../assets/images/items/boards.webp";
import GasolinePhoto from "../assets/images/items/gasoline.webp";
import KeyPhoto from "../assets/images/items/key.webp";
import GrenadePhoto from "../assets/images/items/grenade.webp";
import KnifePhoto from "../assets/images/items/knife.webp";
import CrossbowPhoto from "../assets/images/items/crossbow.webp";
import AxePhoto from "../assets/images/items/axe.webp";
import HandgunPhoto from "../assets/images/items/handgun.webp";
import AssaultRifflePhoto from "../assets/images/items/assoult-riffle.webp";
import ShotgunPhoto from "../assets/images/items/shotgun.webp";
import BFGPhoto from "../assets/images/items/BFG.webp";

export const CharacterPhotos: { [key: string]: string } = {
  Alex: AlexPhoto,
  Anita: AnitaPhoto,
  Max: MaxPhoto,
  Fred: PolicemanPhoto,
  Johnny: JohnnyPhoto,
};

export const ZombiePhotos: { [key: string]: string } = {
  [ZombieProps.ZombieNameBoss]: NightmarePhoto,
  [ZombieProps.ZombieNameDefault]: DefaultZombiePhoto,
};

export const flipCard = FlipCardPhoto;

export const ItemsAndWeaponsPhotos: { [key: string]: string } = {
  [ItemsAndWeaponsNames.FIRST_AID_KITS]: FirstAidKitPhoto,
  [ItemsAndWeaponsNames.BOARDS]: BoardsPhoto,
  [ItemsAndWeaponsNames.GASOLINE]: GasolinePhoto,
  [ItemsAndWeaponsNames.KEYS]: KeyPhoto,
  [ItemsAndWeaponsNames.GRENADES]: GrenadePhoto,
  [ItemsAndWeaponsNames.KNIFES]: KnifePhoto,
  [ItemsAndWeaponsNames.CROSSBOWS]: CrossbowPhoto,
  [ItemsAndWeaponsNames.AXES]: AxePhoto,
  [ItemsAndWeaponsNames.HANDGUNS]: HandgunPhoto,
  [ItemsAndWeaponsNames.ASSAULTRIFLES]: AssaultRifflePhoto,
  [ItemsAndWeaponsNames.SHOTGUNS]: ShotgunPhoto,
  [ItemsAndWeaponsNames.BFG]: BFGPhoto,
};
