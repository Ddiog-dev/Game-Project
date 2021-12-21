import {createAction, props} from "@ngrx/store";

export const addGold = createAction('[Resource add gold]', props<{amount: number}>());
export const removeGold = createAction('[Resource remove gold]', props<{amount: number}>());

export const addGoldIncome = createAction('[Resource add gold income]', props<{amount: number}>());
export const removeGoldIncome = createAction('[Resource remove gold income]', props<{amount: number}>());
export const resetGoldIncome = createAction('[Resource reset gold income]');

