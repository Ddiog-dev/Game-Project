import { Component, OnInit } from '@angular/core';
import {Building} from "../../models/building";
import {BuildingService} from "../../services/building.service";
import {Store} from "@ngrx/store";
import {addIncome, resetIncome} from "../../../../redux-store/actions/game-actions";
import {StoreState} from "../../../../redux-store/models/store-state";

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
    this.store.dispatch(resetIncome())
    this.buildings = this.buildingService.getBuildings();
    this.updateColumnsNumbers();
    this.buildings.forEach(building => this.store.dispatch(addIncome({amount:building.tier.income})))
  }

  updateColumnsNumbers(){
    this.columns = Math.ceil(Math.sqrt(this.buildings.length));
  }
}
