import {StoreState} from "../models/store-state";

export class EconomyManagementReducer {

  static addGold(state: StoreState, amount: number){
    return { ...state,gold: state.gold + amount}
  }

  static removeGold(state: StoreState, amount: number){
    const newAmount = state.gold-amount;
    return {...state,gold: newAmount > 0? newAmount : 0}
  }

  static addIncome(state: StoreState, amount: number){
    return {...state,income: state.income + amount}
  }

  static removeIncome(state: StoreState, amount: number){
    const newAmount = state.income-amount;
    return {...state,income: newAmount > 0? newAmount : 0}
  }

  static resetIncome(state: StoreState, ){
    return {...state,income: 0}
  }
}
