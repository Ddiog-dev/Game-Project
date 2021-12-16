import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import {GameToolbarComponent} from "./components/game-toolbar/game-toolbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import {StoreModule} from "@ngrx/store";
import {reducers, storeStateKey} from "../redux-store";



@NgModule({
  declarations: [
    GameComponent,
    GameToolbarComponent,
    SidePanelComponent,
    MainScreenComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    GameToolbarComponent
  ],
})
export class GameModule { }
