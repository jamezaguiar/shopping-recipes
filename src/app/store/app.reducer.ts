import { ActionReducerMap } from '@ngrx/store';

import {
  ShoppingListState,
  shoppingListReducer,
} from '../shopping-list/store/shopping-list.reducer';
import { AuthState, authReducer } from '../auth/store/auth.reducer';

export type AppState = {
  shoppingList: ShoppingListState;
  auth: AuthState;
};

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  auth: authReducer,
};
