import {IncomeType} from "./income-type";

export interface BuildingTier {
  income: number;
  description: string;
  incomeType: IncomeType
  cost: number;
}
