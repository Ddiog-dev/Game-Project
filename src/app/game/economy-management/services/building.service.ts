import { Injectable } from '@angular/core';
import {Building} from "../models/building";
import {BuildingTier} from "../models/building-tier";
import {IncomeType} from "../models/income-type";

@Injectable({
  providedIn: 'root'
})
export class BuildingService {



  constructor() {
  }

  getBuildings(): Building[] {
    return [
      {description: "desc 1", name: "test building 1", nextTiers: [{description: '', income: 2, incomeType: IncomeType.MANA, tier: 1, cost: 1},{description: '', income: 2, incomeType: IncomeType.GOLD, tier: 1, cost: 2}], tier: {description: '', income: 1, incomeType: IncomeType.GOLD, tier: 0, cost: 1}},
      {description: "desc 2", name: "test building 2", nextTiers: [{description: '', income: 2, incomeType: IncomeType.MANA, tier: 1, cost: 1}], tier: {description: '', income: 1, incomeType: IncomeType.GOLD, tier: 0, cost: 1}},
      {description: "desc 3", name: "test building 3", nextTiers: [{description: '', income: 2, incomeType: IncomeType.MANA, tier: 1, cost: 1}], tier: {description: '', income: 1, incomeType: IncomeType.GOLD, tier: 0, cost: 1}},
      {description: "desc 4", name: "test building 4", nextTiers: [{description: '', income: 2, incomeType: IncomeType.MANA, tier: 1, cost: 1}], tier: {description: '', income: 1, incomeType: IncomeType.GOLD, tier: 0, cost: 1}},
      {description: "desc 5", name: "test building 5", nextTiers: [{description: '', income: 2, incomeType: IncomeType.MANA, tier: 1, cost: 1}], tier: {description: '', income: 1, incomeType: IncomeType.GOLD, tier: 0, cost: 1}},
      {description: "desc 6", name: "test building 6", nextTiers: [{description: '', income: 2, incomeType: IncomeType.MANA, tier: 1, cost: 1}], tier: {description: '', income: 1, incomeType: IncomeType.GOLD, tier: 0, cost: 1}},];
  }
}
