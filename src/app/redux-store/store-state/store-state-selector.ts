import {StoreState} from "./store-state";
import {createSelector} from "@ngrx/store";


const state = (storeState: StoreState) => storeState;

export const currentStoreState = createSelector(state,(storeState: StoreState) => storeState);
