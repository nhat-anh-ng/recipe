import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A Burger Recipe',
      'This is a test',
      'https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
      [new Ingredient('Meat', 1), new Ingredient('Salad', 2)]
    ),
    new Recipe(
      'Soup',
      'For winter',
      'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
      [new Ingredient('Pumpkin', 1), new Ingredient('garlic gloves', 5)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
