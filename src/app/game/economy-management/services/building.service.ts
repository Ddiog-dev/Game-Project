import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import Forum from "src/assets/buildings/forum.json"
import Tavern from "src/assets/buildings/tavern.json"
import {Store} from "@ngrx/store";
import {StoreState} from "../../../redux-store/store-state/store-state";
import {buildingsList} from "../../../redux-store/building/selector/building-selectors";
import {SimplifiedBuildingRepresentation} from "../models/simplified-building-representation";
import {Observable, shareReplay, Subject} from "rxjs";
import {setBuildingList} from "../../../redux-store/building/action/building-actions";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  buildings: Building[] = [];
  buildingMap: Map<string,Building>= new Map();

  buildingsSubject: Subject<Building[]>= new Subject<Building[]>();
  buildingsObservable: Observable<Building[]> = this.buildingsSubject.asObservable().pipe(shareReplay(1));

  constructor(private store: Store<StoreState>) {
    this.initialize();
    store.select(buildingsList)
      .subscribe(simplifiedBuildings => this.transFormSimplifiedToComplete(simplifiedBuildings));
  }

  initialize(){
    this.buildingMap.set('Forum', Forum as unknown as Building);
    this.buildingMap.set('Tavern', Tavern as unknown as Building);
    this.updateBuildings();

  }

  getMapBuildingList(): Building[] {
    return Array.from(this.buildingMap.values())
  }

   getBuildings(): Observable<Building[]> {
    return this.buildingsObservable;
  }

  transformCompleteToSimplified(): SimplifiedBuildingRepresentation[] {
    return this.buildings.map(building => ({name: building.name, tier: building.tier}))
  }

  transFormSimplifiedToComplete(simplifiedBuildings: SimplifiedBuildingRepresentation[]){
    simplifiedBuildings.forEach(simplifiedBuilding => this.setFullBuilding(simplifiedBuilding));
    this.updateBuildings();
  }

  setFullBuilding(simplifiedBuilding: SimplifiedBuildingRepresentation) {
    const building = this.buildingMap.get(simplifiedBuilding.name);
    if(building){
      this.buildingMap.set(simplifiedBuilding.name, {...building, tier: simplifiedBuilding.tier});
    }
  }

  saveBuildings(){
    this.store.dispatch(setBuildingList({buildings: this.transformCompleteToSimplified()}))
  }

  updateBuildings(){
    this.buildings = this.getMapBuildingList();
    this.buildingsSubject.next(this.buildings);
  }
}
