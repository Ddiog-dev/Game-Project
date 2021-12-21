import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {StoreState} from "../redux-store/models/store-state";
import {incomeSelector} from "../redux-store/selectors/game-selectors";
import {addGold} from "../redux-store/actions/game-actions";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  clockSubject: Subject<void> = new Subject<void>();
  clockObservable: Observable<void> = this.clockSubject.asObservable();

  activeClock: boolean = true;
  income: number =0;

  constructor(private store:Store<StoreState>) {
    store.select(incomeSelector).subscribe(income => this.income = income);
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
    this.store.dispatch(addGold({amount:this.income}));
  }

  getObservable(): Observable<void>{
    return this.clockObservable;
  }
}
