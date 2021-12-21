import {Store} from "@ngrx/store";
import {Building} from "../game/economy-management/models/building";
import {IncomeType} from "../game/economy-management/models/income-type";
import {addGoldIncome} from "../redux-store/gold/action/gold-actions";

export class StoreUtil {

  static addIncome(store: Store, building: Building){
    switch (building.tier.incomeType) {
      case IncomeType.GOLD:
        store.dispatch(addGoldIncome({amount:building.tier.income}))
        break;
      case IncomeType.MANA:
        console.error('not handling mana income')
        break;
      default:
        console.error('not handling income type : ' + building.tier.incomeType)
        break;
    }
  }
}
