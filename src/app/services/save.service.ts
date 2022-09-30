import { Injectable } from '@angular/core';
import {ClockService} from "./clock.service";
import {Store} from "@ngrx/store";
import {currentStoreState} from "../redux-store/store-state/store-state-selector";
import {initialStoreState, StoreState} from "../redux-store/store-state/store-state";
import {setManaState} from "../redux-store/mana/action/mana-actions";
import {setGoldState} from "../redux-store/gold/action/gold-actions";
import {BuildingService} from "../game/economy-management/services/building.service";
import {setBuildingState} from "../redux-store/building/action/building-actions";
import {manaState} from "../redux-store/mana/selector/mana-selectors";
import {BuildingState} from "../redux-store/building/model/building-state";
import {GoldState} from "../redux-store/gold/model/gold-state";
import {ManaState} from "../redux-store/mana/model/mana-state";
import {goldState} from "../redux-store/gold/selector/gold-selectors";
import {buildingState} from "../redux-store/building/selector/building-selectors";
import {BackEndService} from "./back-end.service";

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  readonly localStorageGameKey ='game';

  storeState: StoreState = {
    mana: {} as ManaState,
    gold: {} as GoldState,
    building: {} as BuildingState
  }

  constructor(private clockService: ClockService, private store: Store<StoreState>, private backendService: BackEndService) {
    clockService.getObservable().subscribe(() => this.saveGame())
    this.store.select(manaState).subscribe(mana => this.storeState.mana = mana);
    this.store.select(goldState).subscribe(gold => this.storeState.gold = gold);
    this.store.select(buildingState).subscribe(building => this.storeState.building = building);
  }

  resetGame(){
    localStorage.setItem(this.localStorageGameKey,JSON.stringify(initialStoreState));
  }

  saveGame(){
    this.backendService.saveState(this.storeState);
  }

  loadGame(){
    this.backendService.getState().subscribe((state:StoreState) => {
      this.store.dispatch(setManaState({newState: {amount: state.mana.amount, income:state.mana.income}}));
      this.store.dispatch(setGoldState({newState: {amount: state.gold.amount, income:state.gold.income}}));
      this.store.dispatch(setBuildingState({newState: {buildings: state.building.buildings}}))
    })

  }
}
