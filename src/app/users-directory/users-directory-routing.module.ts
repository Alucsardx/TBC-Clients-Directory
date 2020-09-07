import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { ClientsInnerPageComponent } from './clients-inner-page/clients-inner-page.component';
import { ClientDataResolverService } from './clients-inner-page/client-data-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ClientsTableComponent
  },
  {
    path: 'client-page/:id',
    component: ClientsInnerPageComponent,
    resolve: { client: ClientDataResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDirectoryRoutingModule {}
