import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersDirectoryRoutingModule } from './users-directory-routing.module';
import { ClientsTableComponent } from './clients-table/clients-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CdkTableModule } from '@angular/cdk/table';
import { ClientsInnerPageComponent } from './clients-inner-page/clients-inner-page.component';
import { ClientDataResolverService } from './clients-inner-page/client-data-resolver.service';
import { AddClientModalComponent } from './add-client-modal/add-client-modal.component';
import { MatSelectModule } from '@angular/material/select';
import {
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material/dialog';
import {
  ConfirmActionDialogModule,
  ConfirmActionDialogComponent
} from '../shared/confirm-action-dialog/confirm-action-dialog.component';
import {
  FilterDialogModule,
  FilterDialogComponent
} from '../shared/filter-dialog/filter-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { ImageUploadModule } from '../shared/image-upload/image-upload.component';
import { ClientService } from './clients-table/clients.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';
import { AccountComponent } from './clients-inner-page/account/account.component';
import { MatTabsModule } from '@angular/material/tabs';
import { AddAccountDialogComponent } from './clients-inner-page/add-account-dialog/add-account-dialog.component';
import {
  ErrorDialogModule,
  ErrorDialogComponent
} from '../shared/error-dialog/error-dialog.component';
import { FilterBarModule } from '../shared/filter-bar/filter-bar.component';
import { EventBusService } from '../shared/services/event-bus.service';
import { EllipsePipeModule } from '../shared/pipes/ellipse.pipe';

@NgModule({
  declarations: [
    ClientsTableComponent,
    ClientsInnerPageComponent,
    AddClientModalComponent,
    AccountComponent,
    AddAccountDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UsersDirectoryRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    CdkTableModule,
    MatDialogModule,
    ConfirmActionDialogModule,
    FilterDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    ImageUploadModule,
    HttpClientModule,
    MatSortModule,
    MatTabsModule,
    ErrorDialogModule,
    FilterBarModule,
    EllipsePipeModule
  ],

  providers: [
    ClientDataResolverService,
    ClientService,
    EventBusService,
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  entryComponents: [
    AddClientModalComponent,
    ConfirmActionDialogComponent,
    FilterDialogComponent,
    AddAccountDialogComponent,
    ErrorDialogComponent
  ]
})
export class UsersDirectoryModule {}
