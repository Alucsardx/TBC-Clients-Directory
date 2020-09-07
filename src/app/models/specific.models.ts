import { Client } from './client.model';
import { AddModalMode } from '../types/types';

export class TableData {
  sort: string;
  sortDirection: string;
  page: number;
  pageSize: number;
}

export class Filter {
  name: string;
  value: unknown;
}

export class AddModalData {
  mode: AddModalMode;
  data: unknown;
  title: string;
  buttonLabel: string;
}

export class ClientResponse {
  count: number;
  clients: Array<Client>;
}
