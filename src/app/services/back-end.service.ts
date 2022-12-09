import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {concatMap, forkJoin, map, mergeMap, Observable} from "rxjs";
import {BuildingType} from "../game/economy-management/models/building-type";
import {StoreState} from "../redux-store/store-state/store-state";
import {Building} from "../game/economy-management/models/building";
import {CharacterType} from "../game/staff-management/models/character-type";
import {Character} from "../game/staff-management/models/character";

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

  getMine(): Observable<Building>{
    return this.httpClient.get<Building>(`http://localhost:8000/building/${BuildingType.MINE}`);
  }

  getPotionShop(): Observable<Building>{
    return this.httpClient.get<Building>(`http://localhost:8000/building/${BuildingType.POTION_SHOP}`);
  }

  getAllBuildings(): Observable<Building[]> {
    return forkJoin([
      this.getForum(),
      this.getTavern(),
      this.getMine(),
      this.getPotionShop(),
    ]);
  }

  getAllCharacters(): Observable<Character[]> {
    return forkJoin([
      this.getKnight(),
    ]);
  }

  getKnight(): Observable<Character>{
    return this.httpClient.get<Character>(`http://localhost:8000/character/${CharacterType.KNIGHT}`);
  }

  saveState(storeState: StoreState){
     this.httpClient.post('http://localhost:8000/game/state',storeState).subscribe(() => console.log("test"));
  }

  getState(): Observable<StoreState>{
    return this.httpClient.get<StoreState>('http://localhost:8000/game/state');
  }
}
