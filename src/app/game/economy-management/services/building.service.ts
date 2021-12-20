import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import {BuildingTier} from "../models/building-tier";
import {IncomeType} from "../models/income-type";
import {StoreState} from "../../../redux-store/models/store-state";
import {Store} from "@ngrx/store";
import {incomeSelector} from "../../../redux-store/selectors/game-selectors";
import {addGold} from "../../../redux-store/actions/game-actions";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  activeClock: boolean = true;
  income: number =0;

  constructor(private store: Store<StoreState>) {
    store.select(incomeSelector).subscribe(income => this.income = income);
    this.economicClock();
  }

  getBuildings(): Building[] {
    const tier: BuildingTier = {description: 0, income: 1, incomeType: IncomeType.GOLD, tier: 0};
    const building: Building = {description: "desc", name: "test building", nextTiers: [], tier: tier};
    return [building, building, building, building, building, building, building, building, building];
  }

  economicClock(){
    if(this.activeClock){
      setTimeout(() => {
        this.store.dispatch(addGold({amount:this.income}));
        this.economicClock()
      },1000)
    }
  }
}
