import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {goldFeatureKey, goldReducer} from "./gold/reducer/gold-reducer";
import {manaFeatureKey, manaReducer} from "./mana/reducer/mana-reducer";
import {buildingFeatureKey, buildingReducer} from "./building/reducer/building-reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(goldFeatureKey, goldReducer),
    StoreModule.forFeature(manaFeatureKey, manaReducer),
    StoreModule.forFeature(buildingFeatureKey, buildingReducer),
  ]
})
export class ReduxStoreModule { }
