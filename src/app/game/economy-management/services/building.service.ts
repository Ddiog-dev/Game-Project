import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import {BuildingTier} from "../models/building-tier";
import {IncomeType} from "../models/income-type";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }

  getBuildings(): Building[]{
    const tier: BuildingTier = {description: 0, income: 0, incomeType: IncomeType.GOLD, tier: 0};
    const building: Building  = {description: "desc", name: "test building", nextTiers: [], tier: tier};
   return [building, building, building,building,building,building ,building,building,building];
  }
}
