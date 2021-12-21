import {MainScreenBuildingRepresentation} from "./main-screen-building-representation";
import {BuildingTier} from "./building-tier";

export interface Building extends MainScreenBuildingRepresentation{
  name: string;
  level: number;
  description: string;
  tier: BuildingTier;
  nextTiers: Map<number, BuildingTier[]>;
}
