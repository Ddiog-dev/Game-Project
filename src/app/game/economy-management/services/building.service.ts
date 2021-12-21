import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import Forum from "src/assets/buildings/forum.json"

@Injectable({
  providedIn: 'root'
})
export class BuildingService {



  constructor() {}

   getBuildings(): Building[] {
    return [Forum as unknown as Building]
  }
}
