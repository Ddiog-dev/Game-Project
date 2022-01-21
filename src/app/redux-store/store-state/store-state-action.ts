import {createAction, props} from "@ngrx/store";
import {StoreState} from "./store-state";

export const loadGame = createAction('[Resource load game]', props<{storeState: StoreState}>());
