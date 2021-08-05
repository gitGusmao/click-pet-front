import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRegisterComponent } from './category-register/category-register.component';

const routes: Routes = [
  {
    path: 'category-list',
    component: CategoryListComponent,
  },
  {
    path: 'category-register',
    component: CategoryRegisterComponent,
  },
  {
    path: 'category-register/:id',
    component: CategoryRegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
