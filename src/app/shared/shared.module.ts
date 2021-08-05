import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSnackbarComponent } from './snackbar/error-snackbar/error-snackbar.component';
import { SuccessSnackbarComponent } from './snackbar/success-snackbar/success-snackbar.component';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ErrorSnackbarComponent,
    SuccessSnackbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    FlexLayoutModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    ErrorSnackbarComponent,
    SuccessSnackbarComponent,
    HeaderComponent,
    FooterComponent,
    ProductItemComponent,
  ],
})
export class SharedModule {}
