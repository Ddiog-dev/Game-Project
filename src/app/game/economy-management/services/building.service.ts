import {Injectable} from '@angular/core';
import {Building} from "../models/building";
import {Store} from "@ngrx/store";
import {StoreState} from "../../../redux-store/store-state/store-state";
import {buildingsUpgradesList} from "../../../redux-store/building/selector/building-selectors";
import {SimplifiedBuildingRepresentation} from "../models/simplified-building-representation";
import {Observable, shareReplay, Subject} from "rxjs";
import {setBuildingStateList} from "../../../redux-store/building/action/building-actions";
import {BackEndService} from "../../../services/back-end.service";
import {BuildingTier} from "../models/building-tier";
import {removeGold, removeGoldIncome} from "../../../redux-store/gold/action/gold-actions";
import {StoreUtil} from "../../../redux-store/utils/store-util";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  _buildings: Building[] = [];
  _buildingsTiers: SimplifiedBuildingRepresentation[] = [];

  buildingsSubject: Subject<Building[]> = new Subject<Building[]>();
  _buildingsObservable: Observable<Building[]> = this.buildingsSubject.asObservable().pipe(shareReplay(1));

  constructor(private store: Store<StoreState>, private backendService: BackEndService) {
    this.initialize();
    store.select(buildingsUpgradesList)
      .subscribe(simplifiedBuildings => {
        this.updateBuildingsTier(simplifiedBuildings);
        this._buildingsTiers = simplifiedBuildings;
      });
    this.backendService.getAllBuildings().subscribe((buildings: Building[]) => {
      this.buildings = buildings;
    })
  }


  initialize() {
    this.updateBuildings();
  }

  get buildingsObservable(): Observable<Building[]> {
    return this._buildingsObservable;
  }

  saveBuildings() {
    this.store.dispatch(setBuildingStateList({buildings: this.transformCompleteToSimplified()}))
  }

  upgradeToNextTier(building: Building, tier: BuildingTier): void {
    const buildingIndex = this._buildings.findIndex(build => build.name === building.name);
    if (buildingIndex >= 0) {
      //remove previous infos
      this.store.dispatch(removeGold({amount: tier.cost}));
      this.store.dispatch(removeGoldIncome({amount: this._buildings[buildingIndex].tier.income}));

      // update infos
      this._buildings[buildingIndex].tier = tier;
      this._buildings[buildingIndex].level += 1;
      StoreUtil.addIncome(this.store, this._buildings[buildingIndex]);

      // spread information
      this.store.dispatch(setBuildingStateList({buildings: this.transformCompleteToSimplified()}))
      this.buildingsSubject.next(this._buildings);
    }
  }

  private set buildings(list: Building[]) {
    this._buildings = list;
    this.updateBuildingsTier(this._buildingsTiers);
    this.buildingsSubject.next(this._buildings);
  }

  private get buildings() {
    return this._buildings;
  }

  private updateBuildingsTier(simplifiedBuildings: SimplifiedBuildingRepresentation[]) {
    simplifiedBuildings.forEach(simplifiedBuilding => this.setFullBuilding(simplifiedBuilding));
    this.updateBuildings();
  }

  private setFullBuilding(simplifiedBuilding: SimplifiedBuildingRepresentation) {
    const buildingIndex = this.buildings.findIndex(build => build.name === simplifiedBuilding.name);
    if (buildingIndex >= 0) {
      this.buildings[buildingIndex] = {
        ...this.buildings[buildingIndex],
        level: this.findLevel(this.buildings[buildingIndex], simplifiedBuilding.tier),
        tier: simplifiedBuilding.tier
      };
    }
  }

  private findLevel(building: Building, tier: BuildingTier): number {
    return building.allTiers.findIndex(tierList =>
      tierList.find(localTier =>
        tier.incomeType == localTier.incomeType && tier.income == localTier.income && tier.cost == localTier.cost))
  }

  private transformCompleteToSimplified(): SimplifiedBuildingRepresentation[] {
    return this.buildings.map(building => ({name: building.name, tier: building.tier}))
  }

  private updateBuildings() {
    this.buildingsSubject.next(this.buildings);
  }
}
