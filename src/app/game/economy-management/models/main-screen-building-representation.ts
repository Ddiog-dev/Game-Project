import {BuildingTier} from "./building-tier";

export interface MainScreenBuildingRepresentation {
  name: string;
  income: number;
  tier: BuildingTier;
}
