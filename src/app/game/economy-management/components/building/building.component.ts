import {Component, Input, OnInit} from '@angular/core';
import {Building} from "../../models/building";
import {StoreState} from "../../../../redux-store/models/store-state";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {goldAmount} from "../../../../redux-store/gold/selector/gold-selectors";
import {BuildingTier} from "../../models/building-tier";
import {removeGold, removeGoldIncome} from "../../../../redux-store/gold/action/gold-actions";
import {StoreUtil} from "../../../../redux-store/utils/store-util";

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {

  @Input()
  building!: Building;

  @Input()
  sidePanelView: boolean = false;

  subscriptions: Subscription[]= [];
  currentGold: number = 0;

  constructor(private store: Store<StoreState>) {}

  ngOnInit(): void {
    this.subscriptions.push(this.store.select(goldAmount).subscribe(gold => this.currentGold = gold));
  }
  get hasNextTier(): boolean {
    return this.building.nextTiers.get(this.building.level+1) != undefined;
  }

  get nextTierCost(): number {
    return this.building.nextTiers.get(this.building.level+1) ? this.building.nextTiers.get(this.building.level+1)![0].cost : Number.MAX_SAFE_INTEGER
  }

  get nextTierBuildings(): BuildingTier[]  {
    return this.building.nextTiers.get(this.building.level+1)!;
  }


  upgradeToNextTier(tier: BuildingTier): void {
    if(this.currentGold >= tier.cost){
      this.store.dispatch(removeGold({amount: tier.cost}));
      this.store.dispatch(removeGoldIncome( {amount: this.building.tier.income}));

      this.building.tier = tier;
      this.building.level += 1;
      StoreUtil.addIncome(this.store, this.building);
      //TODO modifier quantité d'income et changer type d'income si jamais
    }
  }



}
