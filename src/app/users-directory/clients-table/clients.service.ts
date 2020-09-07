import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Client } from 'src/app/models/client.model';
import { TableData } from 'src/app/models/specific.models';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account.model';
import { Utils } from 'src/app/utils/utils';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  resourceUrl = environment.apiServer;

  constructor(private http: HttpClient) {}

  getClients(sortColumn, sortDirection, page, itemsOnPage) {
    const filtersJson = Utils.getItemFromLocalStorage('filters');
    let filters;
    if (filtersJson) {
      filters = JSON.parse(filtersJson);
    }

    const params = {
      _start: (page * itemsOnPage).toString(),
      _limit: itemsOnPage,
      _sort: sortColumn,
      _order: sortDirection
    };

    if (filter) {
      const keys = Object.keys(filters);
      for (const key of keys) {
        if (filters[key]) {
          params[key] = filters[key].toString();
        }
      }
    }

    return this.http.get(`${this.resourceUrl}/clients`, { params });
  }

  getClient(clientId: number): Observable<Client> {
    return this.http.get(
      `${this.resourceUrl}/clients/${clientId}`
    ) as Observable<Client>;
  }
  addNewClient(client: Client) {
    return this.http.post(`${this.resourceUrl}/clients`, client);
  }

  updateClient(client: Client) {
    return this.http.patch(`${this.resourceUrl}/clients/${client.id}`, client);
  }
  removeClient(client: Client) {
    return this.http.delete(`${this.resourceUrl}/clients/${client.id}`);
  }

  addAccount(account: Account) {
    return this.http.post(`${this.resourceUrl}/accounts`, account);
  }
  getAccounts(clientId: number) {
    const params = new HttpParams().set('clientId', clientId.toString());
    return this.http.get(`${this.resourceUrl}/accounts`, { params });
  }
  updateAccount(account: Account) {
    return this.http.patch(
      `${this.resourceUrl}/accounts/${account.id}`,
      account
    );
  }
  removeAccount(account: Account) {
    return this.http.delete(`${this.resourceUrl}/accounts/${account.id}`);
  }
}
