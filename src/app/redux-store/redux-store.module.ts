import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {goldFeatureKey, goldReducer} from "./gold/reducer/gold-reducer";
import {manaFeatureKey, manaReducer} from "./mana/reducer/mana-reducer";
import {stateFeatureKey, storeStateReducer} from "./store-state/store-state-reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(goldFeatureKey, goldReducer),
    StoreModule.forFeature(manaFeatureKey, manaReducer),
    StoreModule.forFeature(stateFeatureKey, storeStateReducer),
  ]
})
export class ReduxStoreModule { }
