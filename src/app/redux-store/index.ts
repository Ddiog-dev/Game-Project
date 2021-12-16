import {createReducer, on} from "@ngrx/store";
import {initialState} from "./models/store-state";
import {addGold} from "./actions/game-actions";

export const storeStateKey = 'game';

export const reducers = createReducer(
  initialState,
  on(addGold, (state,{amount}) => ({ ...state,gold: state.gold + amount}))
  );

export const metaReducers = [];
