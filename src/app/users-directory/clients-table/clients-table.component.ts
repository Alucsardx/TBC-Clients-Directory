import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.scss']
})
export class ClientsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'action',
    'id',
    'firstName',
    'lastName',
    'personalId',
    'mobileNumber'
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {}
}

export interface PeriodicElement {
  firstName: string;
  id: number;
  lastName: string;
  personalId: number;
  mobileNumber: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    firstName: 'Hydrogen',
    lastName: 'Test',
    personalId: 1.0079,
    mobileNumber: 'H'
  },
  {
    id: 2,
    firstName: 'Helium',
    lastName: 'Test',
    personalId: 4.0026,
    mobileNumber: 'He'
  },
  {
    id: 3,
    firstName: 'Lithium',
    lastName: 'Test',
    personalId: 6.941,
    mobileNumber: 'Li'
  },
  {
    id: 4,
    firstName: 'Beryllium',
    lastName: 'Test',
    personalId: 9.0122,
    mobileNumber: 'Be'
  },
  {
    id: 5,
    firstName: 'Boron',
    lastName: 'Test',
    personalId: 10.811,
    mobileNumber: 'B'
  },
  {
    id: 6,
    firstName: 'Carbon',
    lastName: 'Test',
    personalId: 12.0107,
    mobileNumber: 'C'
  },
  {
    id: 7,
    firstName: 'Nitrogen',
    lastName: 'Test',
    personalId: 14.0067,
    mobileNumber: 'N'
  },
  {
    id: 8,
    firstName: 'Oxygen',
    lastName: 'Test',
    personalId: 15.9994,
    mobileNumber: 'O'
  },
  {
    id: 9,
    firstName: 'Fluorine',
    lastName: 'Test',
    personalId: 18.9984,
    mobileNumber: 'F'
  },
  {
    id: 10,
    firstName: 'Neon',
    lastName: 'Test',
    personalId: 20.1797,
    mobileNumber: 'Ne'
  },
  {
    id: 11,
    firstName: 'Sodium',
    lastName: 'Test',
    personalId: 22.9897,
    mobileNumber: 'Na'
  },
  {
    id: 12,
    firstName: 'Magnesium',
    lastName: 'Test',
    personalId: 24.305,
    mobileNumber: 'Mg'
  },
  {
    id: 13,
    firstName: 'Aluminum',
    lastName: 'Test',
    personalId: 26.9815,
    mobileNumber: 'Al'
  },
  {
    id: 14,
    firstName: 'Silicon',
    lastName: 'Test',
    personalId: 28.0855,
    mobileNumber: 'Si'
  },
  {
    id: 15,
    firstName: 'Phosphorus',
    lastName: 'Test',
    personalId: 30.9738,
    mobileNumber: 'P'
  },
  {
    id: 16,
    firstName: 'Sulfur',
    lastName: 'Test',
    personalId: 32.065,
    mobileNumber: 'S'
  },
  {
    id: 17,
    firstName: 'Chlorine',
    lastName: 'Test',
    personalId: 35.453,
    mobileNumber: 'Cl'
  },
  {
    id: 18,
    firstName: 'Argon',
    lastName: 'Test',
    personalId: 39.948,
    mobileNumber: 'Ar'
  },
  {
    id: 19,
    firstName: 'Potassium',
    lastName: 'Test',
    personalId: 39.0983,
    mobileNumber: 'K'
  },
  {
    id: 20,
    firstName: 'Calcium',
    lastName: 'Test',
    personalId: 40.078,
    mobileNumber: 'Ca'
  }
];
