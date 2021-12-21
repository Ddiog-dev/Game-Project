import {createAction, props} from "@ngrx/store";


export const addGoldIncome = createAction('[Resource add gold income]', props<{amount: number}>());
export const removeGoldIncome = createAction('[Resource remove gold income]', props<{amount: number}>());
export const resetGoldIncome = createAction('[Resource reset gold income]');
