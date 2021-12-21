import {createAction, props} from "@ngrx/store";

export const addMana = createAction('[Resource add Mana]', props<{amount: number}>());
export const removeMana = createAction('[Resource remove Mana]', props<{amount: number}>());

export const addManaIncome = createAction('[Resource add Mana income]', props<{amount: number}>());
export const removeManaIncome = createAction('[Resource remove Mana income]', props<{amount: number}>());
export const resetManaIncome = createAction('[Resource reset Mana income]');

