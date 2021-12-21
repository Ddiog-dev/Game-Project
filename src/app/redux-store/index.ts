import {createReducer, on} from "@ngrx/store";
import {initialState} from "./models/store-state";
import {EconomyManagementReducer} from "./reducers/economy-management-reducer";
import {addGold, removeGold} from "./actions/gold/gold-actions";
import {addGoldIncome, removeGoldIncome, resetGoldIncome} from "./actions/gold/income-actions";

export const storeStateKey = 'game';

export const reducers = createReducer(
  initialState,
  on(addGold, (state,{amount}) => EconomyManagementReducer.addGold(state,amount)),
  on(removeGold, (state,{amount}) => EconomyManagementReducer.removeGold(state,amount)),
  on(addGoldIncome, (state, {amount}) => EconomyManagementReducer.addGoldIncome(state,amount)),
  on(removeGoldIncome, (state, {amount}) => EconomyManagementReducer.removeGoldIncome(state,amount)),
  on(resetGoldIncome, (state) => EconomyManagementReducer.resetGoldIncome(state))
  );

export const metaReducers = [];
