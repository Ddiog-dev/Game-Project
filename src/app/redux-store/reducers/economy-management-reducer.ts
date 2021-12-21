import {StoreState} from "../models/store-state";

export class EconomyManagementReducer {

  static addGold(state: StoreState, amount: number){
    return { ...state,gold: state.gold + amount}
  }

  static removeGold(state: StoreState, amount: number){
    const newAmount = state.gold-amount;
    return {...state,gold: newAmount > 0? newAmount : 0}
  }

  static addGoldIncome(state: StoreState, amount: number){
    return {...state,goldIncome: state.goldIncome + amount}
  }

  static removeGoldIncome(state: StoreState, amount: number){
    const newAmount = state.goldIncome-amount;
    return {...state,goldIncome: newAmount > 0? newAmount : 0}
  }

  static resetGoldIncome(state: StoreState, ){
    return {...state,goldIncome: 0}
  }
}
