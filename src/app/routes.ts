import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { HomeComponent } from './components/home/home.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeListComponent} from './recipes/recipe-list/recipe-list.component';
import {RecipeCreateComponent} from './recipe-add/recipe-create/recipe-create.component';
import {RecipeCreateListComponent} from './recipe-add/recipe-create-list/recipe-create-list.component';
import {RecipeAddComponent} from './recipe-add/recipe-add.component';

export const routes: Routes = [
    {
      path: 'recipe-detail/:id', component: RecipeDetailComponent
    },
    {
      path:'shopping-list', component: ShoppingListComponent
    },
    {
      path: 'recipe', component: RecipeListComponent
    },
    {
      path: 'recipe/api/posts', component: RecipeCreateComponent
    },
    {
      path: 'recipe-list', component: RecipeCreateListComponent
    },
    {
      path: "**", component: HomeComponent
    }
];
