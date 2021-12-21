import { Component, OnInit } from '@angular/core';
import {Building} from "../../models/building";
import {BuildingService} from "../../services/building.service";
import {Store} from "@ngrx/store";
import {StoreState} from "../../../../redux-store/models/store-state";
import {StoreUtil} from "../../../../utils/store-util";
import {resetGoldIncome} from "../../../../redux-store/actions/gold/income-actions";

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
    this.store.dispatch(resetGoldIncome())
    this.buildings = this.buildingService.getBuildings();
    this.updateColumnsNumbers();
    this.buildings.forEach(building =>StoreUtil.addIncome(this.store, building));
  }

  updateColumnsNumbers(){
    this.columns = Math.ceil(Math.sqrt(this.buildings.length));
  }
}
