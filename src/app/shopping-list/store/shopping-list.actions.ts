import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
export const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
export const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';


// tslint:disable-next-line:max-line-length
// this (Action) interface being implemented into add ingredient now forces us to structure the add ingredient class in a certain way. To be precise, we need to have a type property in the add ingredient class and that type is the identifier of this action.
export class AddIngredient implements Action {
  // that is a TypeScript feature which indicates to TypeScript that this must never be changed from outside
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {}
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {}
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

// tslint:disable-next-line:max-line-length
// it needs no payload because if we want to stop, I just want to reset the editedIngredient and the editedIngredientIndex to their initial values, so we don't need to change anything.
export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}

export type ShoppingListActions = AddIngredient |
                                  AddIngredients |
                                  UpdateIngredient |
                                  DeleteIngredient |
                                  StartEdit |
                                  StopEdit;
