import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CourselComponent } from './coursel/coursel.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourselSlideComponent } from './coursel-slide/coursel-slide.component';

@NgModule({
  declarations: [
    IndexComponent,
    ProductListComponent,
    ProductDetailComponent,
    CartComponent,
    CourselComponent,
    HomeComponent,
    CourselSlideComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    SharedModule,
    CarouselModule,
    MatToolbarModule
  ],
})
export class IndexModule {}
