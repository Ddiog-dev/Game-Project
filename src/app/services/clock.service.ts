import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {StoreState} from "../redux-store/models/store-state";
import {goldIncome} from "../redux-store/gold/selector/gold-selectors";
import {Observable, Subject} from "rxjs";
import {addGold} from "../redux-store/gold/action/gold-actions";
import {manaIncome} from "../redux-store/mana/selector/mana-selectors";
import {addMana} from "../redux-store/mana/action/mana-actions";

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  clockSubject: Subject<void> = new Subject<void>();
  clockObservable: Observable<void> = this.clockSubject.asObservable();

  activeClock: boolean = true;

  goldIncome: number = 0;
  manaIncome: number = 0;

  constructor(private store:Store<StoreState>) {
    store.select(goldIncome).subscribe(income => this.goldIncome = income);
    store.select(manaIncome).subscribe(income => this.manaIncome = income)
    this.economicClock();
  }

  startClock(){
    if(this.activeClock){
      setTimeout(() => {
        this.economicClock()

        this.startClock();
      },5000)
    }
  }
  stopClock(){
    this.activeClock = false;
  }

  economicClock(){
    this.store.dispatch(addGold({amount:this.goldIncome}));
    this.store.dispatch(addMana({amount:this.manaIncome}));
  }

  getObservable(): Observable<void>{
    return this.clockObservable;
  }
}
