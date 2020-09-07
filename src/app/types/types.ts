export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export interface Address {
  Country: string;
  City: string;
  StreetAddress: string;
}

export enum Currency {
  GEL = 'GEL',
  USD = 'USD',
  EUR = 'EUR',
  RUB = 'RUB'
}

export enum AccountType {
  Checking = 'მიმდინარე',
  Saving = 'შემნახველი',
  Accumulative = 'დაგროვებითი'
}

export enum AddModalMode {
  Add,
  Edit
}

export enum AccountStatus {
  Active = 'აქტიური',
  Closed = 'დახურული'
}

export enum FilterTypes {
  firstName = 'First Name',
  lastName = 'Last Name',
  gender = 'Gender',
  personalId = 'Personal ID'
}
