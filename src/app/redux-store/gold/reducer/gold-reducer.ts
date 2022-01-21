import {createReducer, on} from "@ngrx/store";
import {GoldState, initialGoldState} from "../model/gold-state";
import {
  addGold,
  addGoldIncome,
  removeGold,
  removeGoldIncome,
  resetGoldIncome,
  setGoldState
} from "../action/gold-actions";
import {setManaState} from "../../mana/action/mana-actions";

export const goldFeatureKey = 'gold';

export const goldReducer = createReducer(
  initialGoldState,
  on(setGoldState, (state,{newState}) => GoldManagementReducer.setValues(state,newState)),
  on(addGold, (state,{amount}) => GoldManagementReducer.addGold(state,amount)),
  on(removeGold, (state,{amount}) => GoldManagementReducer.removeGold(state,amount)),
  on(addGoldIncome, (state, {amount}) => GoldManagementReducer.addGoldIncome(state,amount)),
  on(removeGoldIncome, (state, {amount}) => GoldManagementReducer.removeGoldIncome(state,amount)),
  on(resetGoldIncome, (state) => GoldManagementReducer.resetGoldIncome(state))
);

class GoldManagementReducer {
  static setValues(state: GoldState, newState:GoldState){
    return {...newState};
  }

  static addGold(state: GoldState, amount: number){
    return { ...state, amount: state.amount + amount}
  }

  static removeGold(state: GoldState, amount: number){
    const newAmount = state.amount-amount;
    return {...state, amount: newAmount > 0? newAmount : 0}
  }

  static addGoldIncome(state: GoldState, amount: number){
    return {...state, income: state.income + amount}
  }

  static removeGoldIncome(state: GoldState, amount: number){
    const newAmount = state.income-amount;
    return {...state, income: newAmount > 0? newAmount : 0}
  }

  static resetGoldIncome(state: GoldState, ){
    return {...state,income: 0}
  }
}
