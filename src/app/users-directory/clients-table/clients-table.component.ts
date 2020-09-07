import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AddClientModalComponent } from '../add-client-modal/add-client-modal.component';
import { ConfirmActionDialogComponent } from 'src/app/shared/confirm-action-dialog/confirm-action-dialog.component';
import { FilterDialogComponent } from 'src/app/shared/filter-dialog/filter-dialog.component';
import {
  Filter,
  ClientResponse,
  TableData
} from 'src/app/models/specific.models';
import { AddModalMode } from 'src/app/types/types';
import { Client } from 'src/app/models/client.model';
import { ClientService } from './clients.service';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/utils/utils';
import { EventBusService } from 'src/app/shared/services/event-bus.service';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = [
    'action',
    'id',
    'firstName',
    'lastName',
    'personalId',
    'mobileNumber'
  ];
  dataSource: Array<Client> = [];
  appliedFilters: Filter;
  resultsLength = 1000;

  tableData: TableData = {
    page: 0,
    pageSize: 10,
    sort: 'id',
    sortDirection: 'asc'
  };
  route;
  eventBusSub;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    private clientService: ClientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private eventBus: EventBusService
  ) {}

  ngAfterViewInit() {}
  ngOnInit() {
    const tempTableData = JSON.parse(
      Utils.getItemFromLocalStorage('tableData')
    );
    if (tempTableData) {
      this.tableData = tempTableData;
    }
    this.sort.sortChange.subscribe(() => this.getServerData());
    this.sort.active = this.tableData.sort;
    this.sort.direction = this.tableData.sortDirection as any;
    this.paginator.pageIndex = this.tableData.page;
    this.paginator.pageSize = this.tableData.pageSize;

    this.getServerData();

    this.eventBusSub = this.eventBus
      .on('filterApplied')
      .subscribe(() => this.getServerData());
  }

  onRowClick(row: Client) {
    this.router.navigate(['client-page', row.id], {
      relativeTo: this.activatedRoute
    });
  }
  addClient() {
    const dialogRef = this.dialog.open(AddClientModalComponent, {
      data: {
        mode: AddModalMode.Add,
        data: null,
        title: 'Add New Client',
        buttonLabel: 'Add New Client'
      }
    });
    dialogRef.afterClosed().subscribe((result: Client) => {
      if (result) {
        this.clientService.addNewClient(result).subscribe(res => {
          this.getServerData();
        });
      }
    });
  }
  editClient(client: Client, event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(AddClientModalComponent, {
      data: {
        mode: AddModalMode.Edit,
        data: client,
        title: 'Edit Client',
        buttonLabel: 'Save'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.updateClient(result).subscribe(data => {
          this.getServerData();
        });
      }
    });
  }
  removeClient(client: Client, event) {
    event.stopPropagation();
    const dialogRef = this.dialog.open(ConfirmActionDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.removeClient(client).subscribe(data => {
          this.getServerData();
        });
      }
    });
  }

  filter() {
    const dialogRef = this.dialog.open(FilterDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

  getServerData() {
    this.tableData = {
      page: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      sort: this.sort.active,
      sortDirection: this.sort.direction
    };
    Utils.setItemToLocalStorage('tableData', JSON.stringify(this.tableData));
    this.clientService
      .getClients(
        this.sort.active,
        this.sort.direction,
        this.paginator.pageIndex,
        this.paginator.pageSize
      )
      .subscribe((data: ClientResponse) => {
        this.dataSource = data.clients;
        this.resultsLength = data.count;
      });
  }

  ngOnDestroy() {
    this.eventBusSub.unsubscribe();
  }
}
