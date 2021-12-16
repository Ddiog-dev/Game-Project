import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameComponent } from './game.component';
import {GameToolbarComponent} from "./components/game-toolbar/game-toolbar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    GameComponent,
    GameToolbarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    GameToolbarComponent
  ],
})
export class GameModule { }
