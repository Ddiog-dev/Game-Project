import { StoreState} from "../../store-state/store-state";
import {createSelector} from "@ngrx/store";
import {ManaState} from "../model/mana-state";

const mana = (state: StoreState) => state.mana;

export const manaAmount = createSelector(mana,(manaState: ManaState) => manaState.amount);
export const manaIncome = createSelector(mana,(manaState: ManaState) => manaState.income);
export const manaState = createSelector(mana,(manaSt: ManaState) => manaSt);
