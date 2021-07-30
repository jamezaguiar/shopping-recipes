import {
  ShoppingListTypes,
  ShoppingListActions,
} from './shopping-list.actions';

import { Ingredient } from '@shared/ingredient.model';

export type ShoppingListState = {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
};

export type ShoppingListAppState = {
  shoppingList: ShoppingListState;
};

const initialState: ShoppingListState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(
  state: ShoppingListState = initialState,
  action: ShoppingListActions
): ShoppingListState {
  switch (action.type) {
    case ShoppingListTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    case ShoppingListTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListTypes.UPDATE_INGREDIENT:
      const oldIngredient = state.ingredients[action.payload.index];
      const updatedIngredient = {
        ...oldIngredient,
        ...action.payload.newIngredient,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[action.payload.index] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
      };
    case ShoppingListTypes.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (_, ingredientIndex) => ingredientIndex !== action.payload.index
        ),
      };
    case ShoppingListTypes.START_EDIT:
      return {
        ...state,
        editedIngredient: { ...state.ingredients[action.payload.index] },
        editedIngredientIndex: action.payload.index,
      };
    case ShoppingListTypes.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
}
