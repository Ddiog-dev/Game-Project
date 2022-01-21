import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {SaveService} from "../services/save.service";

@Injectable({
  providedIn: 'root'
})
export class GameLoaderResolver implements Resolve<boolean> {

  constructor(private saveService: SaveService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.saveService.loadGame();
    return of(true);
  }
}
