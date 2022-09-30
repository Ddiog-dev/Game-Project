import {createAction, props} from "@ngrx/store";
import {BuildingState} from "../model/building-state";
import {
  SimplifiedBuildingRepresentation
} from "../../../game/economy-management/models/simplified-building-representation";


export const setBuildingState = createAction('[Resource set building state]', props<{newState: BuildingState}>());

export const setBuildingStateList = createAction('[Resource set buildings]', props<{buildings: SimplifiedBuildingRepresentation[]}>());

