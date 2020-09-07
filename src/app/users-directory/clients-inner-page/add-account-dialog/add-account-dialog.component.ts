import { Component, OnInit, Inject } from '@angular/core';
import {
  AccountType,
  Currency,
  AccountStatus,
  AddModalMode
} from 'src/app/types/types';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddModalData } from 'src/app/models/specific.models';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-add-account-dialog',
  templateUrl: './add-account-dialog.component.html',
  styleUrls: ['./add-account-dialog.component.scss']
})
export class AddAccountDialogComponent implements OnInit {
  accountTypes = [
    { name: AccountType.Accumulative, value: AccountType.Accumulative },
    { name: AccountType.Checking, value: AccountType.Checking },
    { name: AccountType.Saving, value: AccountType.Saving }
  ];
  currencies = [
    { name: Currency.EUR, value: Currency.EUR },
    { name: Currency.GEL, value: Currency.GEL },
    { name: Currency.RUB, value: Currency.RUB },
    { name: Currency.USD, value: Currency.USD }
  ];
  statuses = [
    { name: AccountStatus.Active, value: AccountStatus.Active },
    { name: AccountStatus.Closed, value: AccountStatus.Closed }
  ];

  accountForm;
  constructor(
    public dialogRef: MatDialogRef<AddAccountDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public dialogInputData: AddModalData
  ) {
    this.accountForm = fb.group({
      type: fb.control('', Validators.required),
      currency: fb.control('', Validators.required),
      status: fb.control('', Validators.required)
    });
  }

  public get addModalMode(): AddModalMode {
    return AddModalMode.Add;
  }

  public get editModalMode(): AddModalMode {
    return AddModalMode.Edit;
  }

  ngOnInit() {
    if (this.dialogInputData.mode === this.editModalMode) {
      const account: Account = this.dialogInputData.data as Account;
      this.accountForm.patchValue({
        type: account.type,
        currency: account.currency,
        status: account.status
      });
    }
  }
  submit() {
    if (this.accountForm.valid) {
      this.dialogRef.close(this.accountForm.value);
    }
  }
}
