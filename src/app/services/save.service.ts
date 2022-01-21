import { Injectable } from '@angular/core';
import {ClockService} from "./clock.service";
import {Store} from "@ngrx/store";
import {currentStoreState} from "../redux-store/store-state/store-state-selector";
import {initialStoreState, StoreState} from "../redux-store/store-state/store-state";
import {setManaState} from "../redux-store/mana/action/mana-actions";
import {setGoldState} from "../redux-store/gold/action/gold-actions";

@Injectable({
  providedIn: 'root'
})
export class SaveService {

  readonly localStorageGameKey ='game';

  storeState?: StoreState;

  constructor(private clockService: ClockService, private store: Store<StoreState>) {
    clockService.getObservable().subscribe(() => this.saveGame())
    this.store.select(currentStoreState).subscribe(storeState => this.storeState = storeState);
  }

  resetGame(){
    localStorage.setItem(this.localStorageGameKey,JSON.stringify(initialStoreState));
  }

  saveGame(){
    localStorage.setItem(this.localStorageGameKey, JSON.stringify(this.storeState))
  }

  loadGame(){
    const inStorage = localStorage.getItem(this.localStorageGameKey)
    const game: StoreState =  inStorage? JSON.parse(inStorage) : initialStoreState;

    this.store.dispatch(setManaState({newState: game.mana}));
    this.store.dispatch(setGoldState({newState: game.gold}))
  }
}
