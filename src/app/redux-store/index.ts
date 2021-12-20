import {createReducer, on} from "@ngrx/store";
import {initialState} from "./models/store-state";
import {addGold, addIncome, removeGold, removeIncome, resetIncome} from "./actions/game-actions";
import {EconomyManagementReducer} from "./reducers/economy-management-reducer";

export const storeStateKey = 'game';

export const reducers = createReducer(
  initialState,
  on(addGold, (state,{amount}) => EconomyManagementReducer.addGold(state,amount)),
  on(removeGold, (state,{amount}) => EconomyManagementReducer.removeGold(state,amount)),
  on(addIncome, (state,{amount}) => EconomyManagementReducer.addIncome(state,amount)),
  on(removeIncome, (state,{amount}) => EconomyManagementReducer.removeIncome(state,amount)),
  on(resetIncome, (state) => EconomyManagementReducer.resetIncome(state))
  );

export const metaReducers = [];
