import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductPartnerListComponent } from './product-partner-list/product-partner-list.component';
import { ProductRegisterComponent } from './product-register/product-register.component';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductPartnerListComponent,
  },
  {
    path: 'product-register',
    component: ProductRegisterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
