import {GoldState, initialGoldState} from "../gold/model/gold-state";
import {initialManaState, ManaState} from "../mana/model/mana-state";

export interface StoreState {
  gold: GoldState;
  mana: ManaState;
}

export const initialStoreState: StoreState = {
  gold: initialGoldState,
  mana: initialManaState
}
