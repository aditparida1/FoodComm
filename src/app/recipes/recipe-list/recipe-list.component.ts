import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit 
{
  recipes: Recipe[] = [
    new Recipe("Baingan ka Bharta","An Indian Recipe", "https://upload.wikimedia.org/wikipedia/commons/3/3a/Baingan_Ka_Bharta.JPG")
  ];
  PP = ["ASDASD", "ASDASDA"];
  getRecipes()
  {
    return this.recipes;
  }
  constructor() { }
  getpp()
  {
    return this.PP;
  }
  ngOnInit(): void {
  }
  

}
