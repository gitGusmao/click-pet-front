import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouteGuard } from './guard/route.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'session',
    loadChildren: () =>
      import('./components/session/session.module').then((m) => m.SessionModule),
  },
  {
    path: 'partner',
    loadChildren: () =>
      import('./components/partner/partner.module').then((m) => m.PartnerModule),
      canActivate: [RouteGuard]
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
