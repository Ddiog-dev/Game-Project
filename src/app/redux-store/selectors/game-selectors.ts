import {StoreState} from "../models/store-state";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {storeStateKey} from "../index";

export const selectState = createFeatureSelector<StoreState>(
  storeStateKey,
);


export const goldSelector = createSelector(selectState,(state: StoreState) => state.gold);
export const incomeSelector = createSelector(selectState,(state: StoreState) => state.income);
