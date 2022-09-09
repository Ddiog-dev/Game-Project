import {GoldState, initialGoldState} from "../gold/model/gold-state";
import {initialManaState, ManaState} from "../mana/model/mana-state";
import {BuildingState, initialBuildingState} from "../building/model/building-state";

export interface StoreState {
  gold: GoldState;
  mana: ManaState;
  building: BuildingState;
}

export const initialStoreState: StoreState = {
  gold: initialGoldState,
  mana: initialManaState,
  building: initialBuildingState
}
