import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/components/menu/menu.component";
import {GameComponent} from "./game/game.component";
import {GameLoaderResolver} from "./resolvers/game-loader.resolver";

const routes: Routes =  [
  {path: '', redirectTo:'menu', pathMatch: 'full'},
  {path: 'menu', component: MenuComponent},
  {path: 'game', component: GameComponent, resolve: {gameLoader: GameLoaderResolver}}
  ]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
