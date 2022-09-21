import { StoreState} from "../../store-state/store-state";
import {createSelector} from "@ngrx/store";
import {GoldState} from "../model/gold-state";
import {ManaState} from "../../mana/model/mana-state";

const gold = (state: StoreState) => state.gold;

export const goldAmount = createSelector(gold,(economy: GoldState) => economy.amount);
export const goldIncome = createSelector(gold,(economy: GoldState) => economy.income);
export const goldState = createSelector(gold,(economy: GoldState) => economy);
