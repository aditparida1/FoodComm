import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit 
{
  
  ingredients: Ingredient[] =[
    new Ingredient('Aubergine', 2),
    new Ingredient('Potato', 3),
    new Ingredient("Tomato", 1)
  ] ;

  constructor() { }
  
  
  ngOnInit(): void {
  }
  ingredientAdded(ing: Ingredient)
  {
    console.log("reached ingredient added of shopping list");
    this.ingredients.push(ing);
  }
}
