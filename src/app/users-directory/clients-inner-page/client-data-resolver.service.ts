import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from '../clients-table/clients.service';

@Injectable({
  providedIn: 'root'
})
export class ClientDataResolverService implements Resolve<Client> {
  constructor(private clientService: ClientService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Client> | Promise<Client> | Client {
    return this.clientService.getClient(route.params.id);
  }
}
