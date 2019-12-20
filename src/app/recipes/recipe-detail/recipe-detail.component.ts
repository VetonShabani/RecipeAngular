import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];
    console.log(id);
    //let recipe = null;//this.recipeService.getRecipe(id);
    let recipe: any = {
      id: id,
      name: "random name",
      description: "description",
      imgPath: "random image path.jpg"
    }
    if (recipe) {
      this.recipe = recipe;
    } else {
      this.router.navigate([""]);
    }
  }
}
