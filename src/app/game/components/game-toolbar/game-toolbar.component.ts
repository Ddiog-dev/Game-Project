import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Subscription} from "rxjs";
import {addGold} from "../../../redux-store/actions/game-actions";
import {goldSelector} from "../../../redux-store/selectors/game-selectors";
import {StoreState} from "../../../redux-store/models/store-state";

@Component({
  selector: 'app-game-toolbar',
  templateUrl: './game-toolbar.component.html',
  styleUrls: ['./game-toolbar.component.scss']
})
export class GameToolbarComponent implements OnInit, OnDestroy {

  constructor(private store: Store<StoreState>) { }



  gold: number = 0;
  subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.store.select(goldSelector).subscribe(gold => this.gold = gold));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  addOne(){
    this.store.dispatch(addGold({amount:1}))
  }



}
