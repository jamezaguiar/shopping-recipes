import {
  ShoppingListTypes,
  ShoppingListActions,
} from './shopping-list.actions';

import { Ingredient } from '@shared/ingredient.model';

export type ShoppingListState = {
  ingredients: Ingredient[];
};

const initialState: ShoppingListState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
};

export function shoppingListReducer(
  state = initialState,
  action: ShoppingListActions
): ShoppingListState {
  switch (action.type) {
    case ShoppingListTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    default:
      return state;
  }
}
