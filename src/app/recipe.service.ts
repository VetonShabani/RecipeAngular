// import {Post} from './posts.model';
import {Injectable} from '@angular/core';
import {Subject, from} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { post } from 'selenium-webdriver/http';
// import {Recipe} from './recipes/recipe.model';
// import {} from 'backend/models/';
import {Recipe} from './recipes/recipe.model';

@Injectable({providedIn: 'root'})
export class RecipeService {
  private recipe: Recipe [] = [];
  private recipeUpdated = new Subject<Recipe []>();

  constructor( private http: HttpClient) {
  }
  getPosts() {
    this.http.get<{name: string, recipe: any}>('http://http://localhost:4200/recipe/api/posts')
      .pipe(map((recipeData) => {
        return recipeData.recipe.map(recipe => {
          return {
            id: recipe._id,
            name: recipe.name,
            description: recipe.description,
            imagePath: recipe.imagePath
          };
        });
      }))
      .subscribe( transformedRecipe => {
        this.recipe = transformedRecipe;
        this.recipeUpdated.next([...this.recipe]);
      });

    // return [...this.posts];
  }

  getRecipeUpdateListener() {
    return this.recipeUpdated.asObservable();
  }

  addRecipe(id:string, imagePath:string, name: string, description: string) {
    const recipe: Recipe = {id, description, imagePath, name};
    this.http.post<{name: string, recipeId: string}>('http://http://localhost:4200/recipe/api/posts', recipe)
      .subscribe(responseData => {
        const id = responseData.recipeId;
        recipe.id = id;
        this.recipe.push(recipe);
        this.recipeUpdated.next([...this.recipe]);
      });
  }

  deletePost(recipeId: string) {
    this.http.delete('http://http://localhost:4200/recipe/api/posts' + recipeId)
      .subscribe( () => {
        const updatedRecipe = this.recipe.filter(recipe => recipe.id !== recipeId);
        this.recipe = updatedRecipe;
        this.recipeUpdated.next([...this.recipe]);

      });
  }
}

