import {Store} from "@ngrx/store";
import {Building} from "../../game/economy-management/models/building";
import {IncomeType} from "../../game/economy-management/models/income-type";
import {addGold, addGoldIncome, removeGoldIncome} from "../gold/action/gold-actions";
import {addManaIncome, removeManaIncome} from "../mana/action/mana-actions";

export class StoreUtil {

  static addIncome(store: Store, building: Building){
    switch (building.tier.incomeType) {
      case IncomeType.GOLD:
        store.dispatch(addGoldIncome({amount:building.tier.income}))
        break;
      case IncomeType.MANA:
        store.dispatch(addManaIncome({amount:building.tier.income}))
        break;
      default:
        console.error('not handling income type : ' + building.tier.incomeType)
        break;
    }
  }

  static removeIncome(store: Store, building: Building){
    switch (building.tier.incomeType) {
      case IncomeType.GOLD:
        store.dispatch(removeGoldIncome({amount:building.tier.income}))
        break;
      case IncomeType.MANA:
        store.dispatch(removeManaIncome({amount:building.tier.income}))
        break;
      default:
        console.error('not handling income type : ' + building.tier.incomeType)
        break;
    }
  }

  static addResource(store: Store, building: Building){
    switch (building.tier.incomeType) {
      case IncomeType.GOLD:
        store.dispatch(addGold({amount: building.tier.income}))
        break;
      case IncomeType.MANA:
        store.dispatch(addGold({amount: building.tier.income}))
        break;
      default:
        console.error('not handling income type : ' + building.tier.incomeType)
        break;
    }
  }
}
