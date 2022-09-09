import {SimplifiedBuildingRepresentation} from "./simplified-building-representation";
import {BuildingTier} from "./building-tier";

export interface Building extends SimplifiedBuildingRepresentation{
  name: string;
  level: number;
  description: string;
  tier: BuildingTier;
  allTiers: BuildingTier[][];
}
