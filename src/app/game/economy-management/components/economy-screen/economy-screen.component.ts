import { Component, OnInit } from '@angular/core';
import {Building} from "../../models/building";
import {BuildingService} from "../../services/building.service";
import {Store} from "@ngrx/store";
import {StoreState} from "../../../../redux-store/store-state/store-state";
import {addGoldIncome, resetGoldIncome} from "../../../../redux-store/gold/action/gold-actions";
import {IncomeType} from "../../models/income-type";
import {addManaIncome, resetManaIncome} from "../../../../redux-store/mana/action/mana-actions";

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
    this.store.dispatch(resetManaIncome())
  }

  initialiseIncomes(){
    console.log('add income')
    let goldIncome = 0;
    let manaIncome = 0;

    this.buildings.forEach(building => {
      switch (building.tier.incomeType){
        case IncomeType.MANA:
          manaIncome += building.tier.income
          break;
        case IncomeType.GOLD:
          goldIncome += building.tier.income
          break;
        default:
          break;
      }
    });

    this.store.dispatch(addGoldIncome({amount: goldIncome}));
    this.store.dispatch(addManaIncome({amount: manaIncome}));
  }

}
