import {createAction, props} from "@ngrx/store";

export const addGold = createAction('[Resource add gold]', props<{amount: number}>());
export const removeGold = createAction('[Resource remove gold]', props<{amount: number}>());
