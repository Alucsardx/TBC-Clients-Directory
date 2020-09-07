import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/models/client.model';
import { MatDialog } from '@angular/material/dialog';
import { AddAccountDialogComponent } from './add-account-dialog/add-account-dialog.component';
import { AddModalMode, AccountStatus } from 'src/app/types/types';
import { Account } from 'src/app/models/account.model';
import { ClientService } from '../clients-table/clients.service';
import { ConfirmActionDialogComponent } from 'src/app/shared/confirm-action-dialog/confirm-action-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-clients-inner-page',
  templateUrl: './clients-inner-page.component.html',
  styleUrls: ['./clients-inner-page.component.scss']
})
export class ClientsInnerPageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private clientService: ClientService
  ) {}

  client: Client;
  accounts: Array<Account> = [];
  get activeStatus() {
    return AccountStatus.Active;
  }
  get closedStatus() {
    return AccountStatus.Closed;
  }

  get activeAccounts() {
    const activeAccounts = this.accounts.filter(
      x => x.status === this.activeStatus
    );
    return activeAccounts ? activeAccounts : [];
  }
  get closedAccounts() {
    const closedAccounts = this.accounts.filter(
      x => x.status === this.closedStatus
    );
    return closedAccounts ? closedAccounts : [];
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.client = data.client;
    });
    this.getAccounts();
  }

  getPictureStyle() {
    if (this.client.pictureName) {
      return {
        backgroundImage: `url("data:image;base64,${this.client.pictureName}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      };
    }
  }
  addAccount() {
    const dialogRef = this.dialog.open(AddAccountDialogComponent, {
      data: {
        mode: AddModalMode.Add,
        data: null,
        title: 'Add New Account',
        buttonLabel: 'Add New Account'
      }
    });
    dialogRef.afterClosed().subscribe((result: Account) => {
      if (result) {
        result.clientId = this.client.id;
        const valid = this.isAccountValid(result);
        if (valid) {
          this.clientService.addAccount(result).subscribe(data => {
            if (data) {
              this.getAccounts();
            }
          });
        } else {
          this.duplicateAccountError();
        }
      }
    });
  }
  editAccount(account: Account) {
    const dialogRef = this.dialog.open(AddAccountDialogComponent, {
      data: {
        mode: AddModalMode.Edit,
        data: account,
        title: 'Edit Account',
        buttonLabel: 'Save'
      }
    });
    dialogRef.afterClosed().subscribe((result: Account) => {
      if (result) {
        account.currency = result.currency;
        account.status = result.status;
        account.type = result.type;
        const valid = this.isAccountValid(account);
        if (valid) {
          this.clientService.updateAccount(account).subscribe(data => {
            if (data) {
              this.getAccounts();
            }
          });
        } else {
          this.duplicateAccountError();
          this.getAccounts();
        }
      }
    });
  }
  removeAccount(account: Account) {
    const dialogRef = this.dialog.open(ConfirmActionDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clientService.removeAccount(account).subscribe(data => {
          this.getAccounts();
        });
      }
    });
  }

  getAccounts() {
    this.clientService
      .getAccounts(this.client.id)
      .subscribe((data: Array<Account>) => {
        this.accounts = data;
      });
  }

  isAccountValid(account: Account) {
    const sameTypes = this.accounts.filter(
      acc => acc.type === account.type && acc.id !== account.id
    );
    if (sameTypes && sameTypes.length > 0) {
      const sameCurrency = sameTypes.filter(
        acc => acc.currency === account.currency
      );
      if (sameCurrency && sameCurrency.length > 0) {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  duplicateAccountError() {
    this.dialog.open(ErrorDialogComponent, {
      data: {
        message: 'Duplicate Type And Currency'
      }
    });
  }
}
