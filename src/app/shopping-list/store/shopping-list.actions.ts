import { Action } from '@ngrx/store';

import { Ingredient } from '@shared/ingredient.model';

export const enum ShoppingListTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
}

export class AddIngredient implements Action {
  readonly type: string = ShoppingListTypes.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}
