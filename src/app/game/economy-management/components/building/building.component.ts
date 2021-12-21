import {Component, Input, OnInit} from '@angular/core';
import {Building} from "../../models/building";
import {StoreState} from "../../../../redux-store/models/store-state";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {goldSelector} from "../../../../redux-store/selectors/gold-selectors";
import {StoreUtil} from "../../../../utils/store-util";
import {BuildingTier} from "../../models/building-tier";
import {removeGold} from "../../../../redux-store/actions/gold/gold-actions";
import {removeGoldIncome} from "../../../../redux-store/actions/gold/income-actions";

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
    this.subscriptions.push(this.store.select(goldSelector).subscribe(gold => this.currentGold = gold));
  }
  get hasNextTier(): boolean {
    return this.building.nextTiers.length > 0;
  }

  get nextTierCost(): number {
    return this.building.nextTiers.length > 0 ? this.building.nextTiers[0].cost : Number.MAX_SAFE_INTEGER
  }

  get nextTierBuildings(): BuildingTier[]  {
    return this.building.nextTiers.filter(building => building.tier === this.building.tier.tier + 1);
  }


  upgradeToNextTier(tier: BuildingTier): void {
    if(this.currentGold >= tier.cost){
      this.store.dispatch(removeGold({amount: tier.cost}));
      this.store.dispatch(removeGoldIncome( {amount: this.building.tier.income}));

      this.building.tier = tier;
      this.building.nextTiers = this.building.nextTiers.filter(buildingTier => buildingTier !== this.building.tier)!;
      StoreUtil.addIncome(this.store, this.building);
      //TODO modifier quantité d'income et changer type d'income si jamais
    }
  }



}
