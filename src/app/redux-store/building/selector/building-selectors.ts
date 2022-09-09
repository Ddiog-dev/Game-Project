import { StoreState} from "../../store-state/store-state";
import {createSelector} from "@ngrx/store";
import {BuildingState} from "../model/building-state";

const building = (state: StoreState) => state.building;

export const buildingsList = createSelector(building,(buildingState: BuildingState) => buildingState.buildings);
