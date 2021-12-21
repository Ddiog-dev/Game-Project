import {GoldState} from "../gold/model/gold-state";
import {ManaState} from "../mana/model/mana-state";

export interface StoreState {
  gold: GoldState;
  mana: ManaState;
}
