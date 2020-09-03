import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsTableComponent } from './clients-table/clients-table.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersDirectoryRoutingModule {}
