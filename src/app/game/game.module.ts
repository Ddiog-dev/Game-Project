import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import {GameToolbarComponent} from "./components/game-toolbar/game-toolbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MainScreenComponent} from "./components/main-screen/main-screen.component";
import {SidePanelComponent} from "./components/side-panel/side-panel.component";
import { BuildingComponent } from './economy-management/components/building/building.component';
import {MatTabsModule} from "@angular/material/tabs";
import { EconomyScreenComponent } from './economy-management/components/economy-screen/economy-screen.component';
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [
    GameComponent,
    GameToolbarComponent,
    SidePanelComponent,
    MainScreenComponent,
    BuildingComponent,
    EconomyScreenComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatGridListModule,
  ],
  exports: [
    GameToolbarComponent
  ],
})
export class GameModule { }
