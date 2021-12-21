import { StoreState} from "../../models/store-state";
import {createSelector} from "@ngrx/store";
import {GoldState} from "../model/gold-state";

export const selectEconomy = (state: StoreState) => state.gold;

export const goldSelector = createSelector(selectEconomy,(economy: GoldState) => economy.amount);
export const goldIncomeSelector = createSelector(selectEconomy,(economy: GoldState) => economy.income);
