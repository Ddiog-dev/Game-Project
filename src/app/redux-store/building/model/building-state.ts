import {Building} from "../../../game/economy-management/models/building";
import {
  SimplifiedBuildingRepresentation
} from "../../../game/economy-management/models/simplified-building-representation";

export interface BuildingState {
  buildings: SimplifiedBuildingRepresentation[]
}

export const initialBuildingState: BuildingState = {
  buildings: []
}
