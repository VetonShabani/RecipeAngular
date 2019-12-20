import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected  = new EventEmitter<Recipe>();
  recipes:  Recipe[] = [
    new Recipe("",'A test recipe','This is simply a test','https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg'),
    new Recipe("",'A test','This is simply a test','https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg')
  ];
  constructor() { }
  ngOnInit() { }
  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }
  onAddRecipe() {
    event.preventDefault();

  }
}
