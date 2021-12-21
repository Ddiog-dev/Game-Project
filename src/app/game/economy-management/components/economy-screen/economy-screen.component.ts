import { Component, OnInit } from '@angular/core';
import {Building} from "../../models/building";
import {BuildingService} from "../../services/building.service";
import {Store} from "@ngrx/store";
import {StoreState} from "../../../../redux-store/models/store-state";
import {addGoldIncome, resetGoldIncome} from "../../../../redux-store/gold/action/gold-actions";
import {IncomeType} from "../../models/income-type";

@Component({
  selector: 'app-economy-screen',
  templateUrl: './economy-screen.component.html',
  styleUrls: ['./economy-screen.component.scss']
})
export class EconomyScreenComponent implements OnInit {

  buildings: Building[]= [];

  columns: number = 0;

  constructor(private buildingService: BuildingService, private store: Store<StoreState>) { }

  ngOnInit(): void {
    this.resetIncomes()
    this.buildings = this.buildingService.getBuildings();
    this.updateColumnsNumbers();
    this.initialiseIncomes();
  }

  updateColumnsNumbers(){
    this.columns = Math.ceil(Math.sqrt(this.buildings.length));
  }

  resetIncomes(){
    this.store.dispatch(resetGoldIncome())
  }

  initialiseIncomes(){
    let goldIncome = 0;

    this.buildings.forEach(building => {
      switch (building.tier.incomeType){
        case IncomeType.MANA:
          break;
        case IncomeType.GOLD:
          goldIncome += building.tier.income
          break;
        default:
          break;
      }
    });

    this.store.dispatch(addGoldIncome({amount: goldIncome}));
  }

}
