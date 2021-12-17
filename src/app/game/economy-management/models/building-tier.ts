import {IncomeType} from "./income-type";

export interface BuildingTier {
  tier: number;
  income: number;
  description: number;
  incomeType: IncomeType
}
