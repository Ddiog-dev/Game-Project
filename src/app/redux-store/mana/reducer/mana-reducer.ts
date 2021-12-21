import {createReducer, on} from "@ngrx/store";
import {ManaState, initialManaState} from "../model/mana-state";
import {addMana, addManaIncome, removeMana, removeManaIncome, resetManaIncome} from "../action/mana-actions";

export const manaFeatureKey = 'mana';

export const manaReducer = createReducer(
  initialManaState,
  on(addMana, (state,{amount}) => ManaManagementReducer.addMana(state,amount)),
  on(removeMana, (state,{amount}) => ManaManagementReducer.removeMana(state,amount)),
  on(addManaIncome, (state, {amount}) => ManaManagementReducer.addManaIncome(state,amount)),
  on(removeManaIncome, (state, {amount}) => ManaManagementReducer.removeManaIncome(state,amount)),
  on(resetManaIncome, (state) => ManaManagementReducer.resetManaIncome(state))
);

class ManaManagementReducer {
  static addMana(state: ManaState, amount: number){
    return { ...state, amount: state.amount + amount}
  }

  static removeMana(state: ManaState, amount: number){
    const newAmount = state.amount-amount;
    return {...state, amount: newAmount > 0? newAmount : 0}
  }

  static addManaIncome(state: ManaState, amount: number){
    return {...state, income: state.income + amount}
  }

  static removeManaIncome(state: ManaState, amount: number){
    const newAmount = state.income-amount;
    return {...state, income: newAmount > 0? newAmount : 0}
  }

  static resetManaIncome(state: ManaState, ){
    return {...state,income: 0}
  }
}
