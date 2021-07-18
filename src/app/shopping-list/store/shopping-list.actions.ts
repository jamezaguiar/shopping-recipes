import { Action } from '@ngrx/store';

import { Ingredient } from '@shared/ingredient.model';

export enum ShoppingListTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
}

export class AddIngredient implements Action {
  readonly type = ShoppingListTypes.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ShoppingListTypes.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListTypes.UPDATE_INGREDIENT;

  constructor(public payload: { index: number; newIngredient: Ingredient }) {}
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListTypes.DELETE_INGREDIENT;

  constructor(public payload: { index: number }) {}
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient;
