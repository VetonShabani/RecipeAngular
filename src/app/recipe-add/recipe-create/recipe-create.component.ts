import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';


import {RecipeService} from '../../recipe.service'

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  constructor(public recipeService: RecipeService) {  }

  onAddPost(form: NgForm) {
    event.preventDefault();
    if (form.invalid) {
      return;
    }
    // this.recipeService.addRecipe(form.value.name, form.value.description);
    this.recipeService.addRecipe(form.value.name,form.value.description,form.value.id,form.value.imagePath);
    form.resetForm();
  }
  ngOnInit(){
  }

}
