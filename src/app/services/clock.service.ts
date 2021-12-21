import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {StoreState} from "../redux-store/models/store-state";
import {goldIncomeSelector} from "../redux-store/selectors/gold-selectors";
import {Observable, Subject} from "rxjs";
import {addGold} from "../redux-store/actions/gold/gold-actions";

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  clockSubject: Subject<void> = new Subject<void>();
  clockObservable: Observable<void> = this.clockSubject.asObservable();

  activeClock: boolean = true;
  income: number =0;

  constructor(private store:Store<StoreState>) {
    store.select(goldIncomeSelector).subscribe(income => this.income = income);
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
