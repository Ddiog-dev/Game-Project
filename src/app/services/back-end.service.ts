import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {concatMap, forkJoin, map, mergeMap, Observable} from "rxjs";
import {BuildingType} from "../game/economy-management/models/building-type";
import {StoreState} from "../redux-store/store-state/store-state";
import {Building} from "../game/economy-management/models/building";

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private httpClient: HttpClient) {
  }

  getForum(): Observable<Building>{
    return this.httpClient.get<Building>(`http://localhost:8000/building/${BuildingType.FORUM}`);
  }

  getTavern(): Observable<Building>{
    return this.httpClient.get<Building>(`http://localhost:8000/building/${BuildingType.TAVERN}`);
  }

  getAll(): Observable<Building[]> {
    return forkJoin([
      this.getForum(),
      this.getTavern()
    ]);
  }

  saveState(storeState: StoreState){
     this.httpClient.post('http://localhost:8000/game/state',storeState).subscribe(() => console.log("test"));
  }

  getState(): Observable<StoreState>{
    return this.httpClient.get<StoreState>('http://localhost:8000/game/state');
  }
}
