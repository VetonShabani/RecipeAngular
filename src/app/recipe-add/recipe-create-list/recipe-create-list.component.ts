import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../../recipes/recipe.model';
import {Subscription} from 'rxjs';

import {RecipeService} from '../../recipe.service'
@Component({
  selector: 'app-recipe-create-list',
  templateUrl: './recipe-create-list.component.html',
  styleUrls: ['./recipe-create-list.component.css']
})
export class RecipeCreateListComponent implements OnInit,OnDestroy {

  recipe: Recipe[] = [];
  private recipeSub: Subscription;
  constructor(public recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeService.getPosts();
    this.recipeSub = this.recipeService.getRecipeUpdateListener().subscribe((recipes: Recipe[]) => {
      this.recipe = recipes;
    });
  }
  onDelete(postId: string){
    this.recipeService.deletePost(postId);
  }
  ngOnDestroy() {
    this.recipeSub.unsubscribe();
  }
}
