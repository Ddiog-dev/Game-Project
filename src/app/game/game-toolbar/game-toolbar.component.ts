import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {goldAmount, goldIncome} from "../../redux-store/gold/selector/gold-selectors";
import {StoreState} from "../../redux-store/models/store-state";
import {addGold} from "../../redux-store/gold/action/gold-actions";
import {manaAmount, manaIncome} from "../../redux-store/mana/selector/mana-selectors";

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html',
  styleUrls: ['./game-toolbar.component.scss']
})
export class GameToolbarComponent implements OnInit, OnDestroy {

  constructor(private store: Store<StoreState>) { }



  gold: number = 0;
  goldIncome: number = 0;
  mana: number = 0;
  manaIncome: number = 0;

  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.store.select(goldAmount).subscribe(gold => this.gold = gold));
    this.subscriptions.push(this.store.select(manaAmount).subscribe(mana => this.mana = mana));

    this.subscriptions.push(this.store.select(goldIncome).subscribe(gold => this.goldIncome = gold));
    this.subscriptions.push(this.store.select(manaIncome).subscribe(mana => this.manaIncome = mana));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  addOne(){
    this.store.dispatch(addGold({amount:1}))
  }



}
