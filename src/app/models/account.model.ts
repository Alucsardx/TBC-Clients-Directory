import { AccountType, Currency, AccountStatus } from '../types/types';

export class Account {
  id: number;
  clientId: number;
  type: AccountType;
  currency: Currency;
  status: AccountStatus;
}
