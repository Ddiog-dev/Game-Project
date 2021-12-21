import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {goldFeatureKey, goldReducer} from "./gold/reducer/gold-reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(goldFeatureKey, goldReducer),
  ]
})
export class ReduxStoreModule { }
