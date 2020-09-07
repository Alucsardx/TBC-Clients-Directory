import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuardedComponent } from './guarded/guarded.component';
import { GuardService } from './guarded/guarded.service';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'clients' },
      {
        path: 'clients',
        loadChildren: () =>
          import('./users-directory/users-directory.module').then(
            m => m.UsersDirectoryModule
          )
      },
      {
        path: 'not-found',
        pathMatch: 'full',
        component: NotFoundComponent
      },
      {
        path: 'guarded',
        pathMatch: 'full',
        canActivate: [GuardService],
        component: GuardedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
