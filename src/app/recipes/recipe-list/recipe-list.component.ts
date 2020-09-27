import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit 
{
  recipes: Recipe[] = [
    new Recipe("Baingan ka Bharta","An Indian Recipe", "https://upload.wikimedia.org/wikipedia/commons/3/3a/Baingan_Ka_Bharta.JPG"),
    new Recipe("Aloo tikki", "Indian Potato Recipe", "https://www.funfoodfrolic.com/wp-content/uploads/2020/06/tikki-thumbnail.jpg")
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  getRecipes()
  {
    return this.recipes;
  }
  constructor() { }
  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe)
  {
    this.recipeSelected.emit(recipe);
  }

}
