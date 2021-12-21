import { StoreState} from "../../models/store-state";
import {createSelector} from "@ngrx/store";
import {GoldState} from "../model/gold-state";

const gold = (state: StoreState) => state.gold;

export const goldAmount = createSelector(gold,(economy: GoldState) => economy.amount);
export const goldIncome = createSelector(gold,(economy: GoldState) => economy.income);
