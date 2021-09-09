import { Action } from '@ngrx/store';

import { Ingredient } from '@shared/ingredient.model';

export enum ShoppingListActions {
  ADD_INGREDIENT = '[Shopping List] Add Ingredient',
  ADD_INGREDIENTS = '[Shopping List] Add Ingredients',
  UPDATE_INGREDIENT = '[Shopping List] Update Ingredient',
  DELETE_INGREDIENT = '[Shopping List] Delete Ingredient',
  START_EDIT = '[Shopping List] Start Edit',
  STOP_EDIT = '[Shopping List] Stop Edit',
}

export class AddIngredient implements Action {
  readonly type = ShoppingListActions.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ShoppingListActions.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListActions.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListActions.DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = ShoppingListActions.START_EDIT;

  constructor(public payload: { index: number }) {}
}

export class StopEdit implements Action {
  readonly type = ShoppingListActions.STOP_EDIT;
}

export type ShoppingListActionsUnion =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
