import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import Forum from "src/assets/buildings/forum.json"
import Tavern from "src/assets/buildings/tavern.json"

@Injectable({
  providedIn: 'root'
})
export class BuildingService {
   getBuildings(): Building[] {
    return [
      Forum as unknown as Building,
      Tavern as unknown as Building
    ]
  }
}
