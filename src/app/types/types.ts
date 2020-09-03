export enum Gender {
  Male = 'მდედრობითი',
  Female = 'მამრობითი'
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

export enum AccountStatus {
  Active = 'აქტიური',
  Closed = 'დახურული'
}
