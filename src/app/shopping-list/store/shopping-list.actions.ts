import { Action } from '@ngrx/store';

import { Ingredient } from '@shared/ingredient.model';

export enum ShoppingListTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
}

export class AddIngredient implements Action {
  readonly type = ShoppingListTypes.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export type ShoppingListActions = AddIngredient;
