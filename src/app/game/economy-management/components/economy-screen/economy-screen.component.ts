import {Component, OnDestroy, OnInit} from '@angular/core';
import {Building} from "../../models/building";
import {BuildingService} from "../../services/building.service";
import {Store} from "@ngrx/store";
import {StoreState} from "../../../../redux-store/store-state/store-state";
import {addGoldIncome, resetGoldIncome} from "../../../../redux-store/gold/action/gold-actions";
import {IncomeType} from "../../models/income-type";
import {addManaIncome, resetManaIncome} from "../../../../redux-store/mana/action/mana-actions";
import {Subscription} from "rxjs";
import {BackEndService} from "../../../../services/back-end.service";

@Component({
  selector: 'app-economy-screen',
  templateUrl: './economy-screen.component.html',
  styleUrls: ['./economy-screen.component.scss']
})
export class EconomyScreenComponent implements OnInit, OnDestroy {

  buildings: Building[]= [];
  buildingSubscription?: Subscription;

  constructor(private buildingService: BuildingService, private store: Store<StoreState> , private backendService: BackEndService) { }

  ngOnInit(): void {
    this.resetIncomes();
    this.buildingSubscription = this.buildingService.buildingsObservable.subscribe(buildings => this.buildings = buildings);
    this.backendService.getAll().subscribe((buildings: Building[]) => {
      this.buildingService.buildings = buildings;

      this.initialiseIncomes();
    })
  }

  ngOnDestroy(): void {
    this.buildingSubscription?.unsubscribe();
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

  updateBuildingStore(){
    this.buildingService.saveBuildings();
  }

}
