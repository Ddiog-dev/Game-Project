import {createReducer, on} from "@ngrx/store";
import {GoldState, initialGoldState} from "../model/gold-state";
import {addGold, addGoldIncome, removeGold, removeGoldIncome, resetGoldIncome} from "../action/gold-actions";

export const goldFeatureKey = 'gold';

export const goldReducer = createReducer(
  initialGoldState,
  on(addGold, (state,{amount}) => EconomyManagementReducer.addGold(state,amount)),
  on(removeGold, (state,{amount}) => EconomyManagementReducer.removeGold(state,amount)),
  on(addGoldIncome, (state, {amount}) => EconomyManagementReducer.addGoldIncome(state,amount)),
  on(removeGoldIncome, (state, {amount}) => EconomyManagementReducer.removeGoldIncome(state,amount)),
  on(resetGoldIncome, (state) => EconomyManagementReducer.resetGoldIncome(state))
);

class EconomyManagementReducer {
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
