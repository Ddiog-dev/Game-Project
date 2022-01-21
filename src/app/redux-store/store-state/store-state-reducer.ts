import {createReducer, on} from "@ngrx/store";
import {initialStoreState, StoreState} from "./store-state";
import {loadGame} from "./store-state-action";

export const stateFeatureKey = '';

export const storeStateReducer = createReducer(
  initialStoreState,
  on(loadGame, (state,{storeState}) => StoreManagementReducer.loadGame(state,storeState)),
);

class StoreManagementReducer {
  static loadGame(state: StoreState, loadedStoreState: StoreState) {
    return {gold:loadedStoreState.gold, mana: loadedStoreState.mana};
  }
}
