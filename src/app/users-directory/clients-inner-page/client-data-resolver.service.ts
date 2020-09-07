import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/models/client.model';
import { ClientService } from '../clients-table/clients.service';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ClientDataResolverService implements Resolve<Client> {
  constructor(private clientService: ClientService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<Client> | Client {
    return this.clientService.getClient(route.params.id).pipe(
      catchError((error: any) => {
        this.router.navigate(['not-found']);
        return null;
      })
    );
  }
}
