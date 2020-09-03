import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersDirectoryRoutingModule } from './users-directory-routing.module';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [ClientsTableComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UsersDirectoryRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule
  ],
  providers: [],
  entryComponents: []
})
export class UsersDirectoryModule {}
