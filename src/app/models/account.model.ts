import { AccountType, Currency, AccountStatus } from '../types/types';

export class Account {
  accountId: number;
  clientId: number;
  type: AccountType;
  currency: Currency;
  status: AccountStatus;
}
