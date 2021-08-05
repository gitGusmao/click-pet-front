import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductPartnerListComponent } from './product-partner-list/product-partner-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ProductPartnerListComponent,
    ProductRegisterComponent,
    ProductPartnerListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSlideToggleModule,
    NgxMatFileInputModule,
    FormsModule,
    MatTableModule,
    ReactiveFormsModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot(),
  ],
})
export class ProductModule {}
