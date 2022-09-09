import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Building} from "../game/economy-management/models/building";
import {concatMap, forkJoin, map, mergeMap, Observable} from "rxjs";
import {BuildingType} from "../game/economy-management/models/building-type";

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private httpClient: HttpClient) {
  }

  getForum(): Observable<string>{
    return this.httpClient.get<{building: string}>(`http://localhost:8000/building/${BuildingType.FORUM}`)
      .pipe(map(response => response.building))
  }

  getTavern(): Observable<string>{
    return this.httpClient.get<{building: string}>(`http://localhost:8000/building/${BuildingType.TAVERN}`)
      .pipe(map(response => response.building))
  }

  getAll(): Observable<string[]> {
    return forkJoin([
      this.getForum(),
      this.getTavern()
    ]);
  }
}
