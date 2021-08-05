import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgxMaskModule } from 'ngx-mask';
import { ApiBaseService } from './services/api-base.service';
import { SessionService } from './services/session/session.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { SnackbarService } from './services/snackbar/snackbar.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductService } from './services/partner/product.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxMaskModule,
    MatSnackBarModule,
    CarouselModule,
  ],
  providers: [
    ApiBaseService,
    SessionService,
    AuthService,
    SnackbarService,
    ProductService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
