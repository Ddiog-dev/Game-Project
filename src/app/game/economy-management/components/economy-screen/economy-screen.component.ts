import {Component, OnDestroy, OnInit} from '@angular/core';
import {Building} from "../../models/building";
import {BuildingService} from "../../services/building.service";
import {Store} from "@ngrx/store";
import {StoreState} from "../../../../redux-store/store-state/store-state";
import {Subscription} from "rxjs";
import {BackEndService} from "../../../../services/back-end.service";

@Component({
  selector: 'app-economy-screen',
  templateUrl: './economy-screen.component.html',
  styleUrls: ['./economy-screen.component.scss']
})
export class EconomyScreenComponent implements OnInit, OnDestroy {

  buildings: Building[]= [];
  buildingSubscription?: Subscription;

  constructor(private buildingService: BuildingService, private store: Store<StoreState> , private backendService: BackEndService) { }

  ngOnInit(): void {
    this.buildingSubscription = this.buildingService.buildingsObservable.subscribe(buildings => {
      this.buildings = buildings;
    });
  }

  ngOnDestroy(): void {
    this.buildingSubscription?.unsubscribe();
  }



}
