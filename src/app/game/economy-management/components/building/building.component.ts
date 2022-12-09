import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Building} from "../../models/building";
import {StoreState} from "../../../../redux-store/store-state/store-state";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {goldAmount} from "../../../../redux-store/gold/selector/gold-selectors";
import {BuildingTier} from "../../models/building-tier";
import {removeGold, removeGoldIncome} from "../../../../redux-store/gold/action/gold-actions";
import {StoreUtil} from "../../../../redux-store/utils/store-util";
import {BackEndService} from "../../../../services/back-end.service";
import {BuildingService} from "../../services/building.service";

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

  constructor(private store: Store<StoreState>, private buildingService: BuildingService) {

  }

  ngOnInit(): void {
    this.subscriptions.push(this.store.select(goldAmount).subscribe(gold => this.currentGold = gold));
  }
  get hasNextTier(): boolean {
    return this.building.allTiers[this.building.level+1] != undefined;
  }

  get nextTierCost(): number {
    return this.building.allTiers[this.building.level+1] ? this.building.allTiers[this.building.level+1]![0].cost : Number.MAX_SAFE_INTEGER
  }

  get currentTierBuildings(): BuildingTier[]{
    return this.building.level >= 0 ? this.building.allTiers[this.building.level].filter(tier => tier.incomeType != this.building.tier.incomeType): [];
  }

  get nextTierBuildings(): BuildingTier[]  {
    return this.building.level < this.building.allTiers.length-1 ?  this.building.allTiers[this.building.level+1] : [];
  }

  upgradeToNextTier(tier: BuildingTier): void {
    this.buildingService.upgradeToNextTier(this.building, tier);
  }





}
