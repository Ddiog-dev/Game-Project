import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import {Store} from "@ngrx/store";
import {StoreState} from "../../../redux-store/store-state/store-state";
import {buildingsList} from "../../../redux-store/building/selector/building-selectors";
import {SimplifiedBuildingRepresentation} from "../models/simplified-building-representation";
import {Observable, shareReplay, Subject} from "rxjs";
import {setBuildingStateList} from "../../../redux-store/building/action/building-actions";
import {BackEndService} from "../../../services/back-end.service";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  _buildings: Building[] = [];

  buildingsSubject: Subject<Building[]>= new Subject<Building[]>();
  _buildingsObservable: Observable<Building[]> = this.buildingsSubject.asObservable().pipe(shareReplay(1));

  constructor(private store: Store<StoreState>) {
    this.initialize();
    store.select(buildingsList)
      .subscribe(simplifiedBuildings => this.updateBuildingsTier(simplifiedBuildings));
  }

  set buildings(list: Building[]){
    this._buildings = list;
    this.buildingsSubject.next(list);
  }

  initialize(){
    this.updateBuildings();
  }

   get buildingsObservable(): Observable<Building[]> {
    return this._buildingsObservable;
  }

  saveBuildings(){
    this.store.dispatch(setBuildingStateList({buildings: this.transformCompleteToSimplified()}))
  }

  private updateBuildingsTier(simplifiedBuildings: SimplifiedBuildingRepresentation[]){
    simplifiedBuildings.forEach(simplifiedBuilding => this.setFullBuilding(simplifiedBuilding));
    this.updateBuildings();
  }

  private setFullBuilding(simplifiedBuilding: SimplifiedBuildingRepresentation) {
    const buildingIndex = this.buildings.findIndex(build => build.name === simplifiedBuilding.name);
    if(buildingIndex){
      this.buildings[buildingIndex] = {...this.buildings[buildingIndex], tier: simplifiedBuilding.tier};
    }
  }

  private transformCompleteToSimplified(): SimplifiedBuildingRepresentation[] {
    return this.buildings.map(building => ({name: building.name, tier: building.tier}))
  }

  private updateBuildings(){
    this.buildingsSubject.next(this.buildings);
  }
}
