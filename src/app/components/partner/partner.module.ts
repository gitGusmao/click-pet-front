import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { NgxEchartsModule } from 'ngx-echarts';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [PartnerComponent, DashboardComponent],
  imports: [
    CommonModule,
    PartnerRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    NgxEchartsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule
  ],
})
export class PartnerModule {}
