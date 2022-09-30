import {createReducer, on} from "@ngrx/store";
import {BuildingState, initialBuildingState} from "../model/building-state";
import {setBuildingStateList, setBuildingState} from "../action/building-actions";
import {Building} from "../../../game/economy-management/models/building";
import {
  SimplifiedBuildingRepresentation
} from "../../../game/economy-management/models/simplified-building-representation";

export const buildingFeatureKey = 'building';

export const buildingReducer = createReducer(
  initialBuildingState,
  on(setBuildingState, (state,{newState}) => GoldManagementReducer.setValues(state,newState)),
  on(setBuildingStateList, (state, {buildings}) => GoldManagementReducer.setBuildings(state,buildings))
);

class GoldManagementReducer {
  static setValues(state: BuildingState, newState:BuildingState){
    return {...newState};
  }

  static setBuildings(state: BuildingState, buildings: SimplifiedBuildingRepresentation[]){
    return { ...state, buildings: buildings}
  }


}
