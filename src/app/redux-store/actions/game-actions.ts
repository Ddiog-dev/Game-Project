import {createAction, props} from "@ngrx/store";

export const addGold = createAction('[Resource add gold]', props<{amount: number}>());
export const removeGold = createAction('[Resource remove gold]', props<{amount: number}>());
export const addIncome = createAction('[Resource add income]', props<{amount: number}>());
export const removeIncome = createAction('[Resource remove income]', props<{amount: number}>());
export const resetIncome = createAction('[Resource reset income]');
