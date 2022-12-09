import {CharacterInventory} from "./character-inventory";
import {CharacterStat} from "./character-stat";
import {Capacity} from "./capacity";

export interface Character {
  name: string;
  level: number;
  hp: CharacterStat;
  mana: CharacterStat;
  atk: CharacterStat;
  def: CharacterStat;
  capacities: Capacity[]
  inventory: CharacterInventory;
}
