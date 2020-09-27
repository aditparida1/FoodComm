import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  list = ["My value"];
  constructor() { }
  @ViewChild('nameInput', {static : false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static : false}) amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  ngOnInit(): void {
  }
  onAdd()
  {
    console.log("reched on Add");
   const ing = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
   console.log("ing : " + ing.amount + ing.name);
   this.ingredientAdded.emit(ing);
  }
  onDelete()
  {

  }

  onClear()
  {

  }
}
