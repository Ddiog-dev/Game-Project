import {CapacityEffect} from "./capacity-effect";

export interface Capacity {
  name: string;
  description: string;
  damage: number;
  effect: CapacityEffect;
}
