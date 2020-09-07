import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from 'src/app/models/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Output() editAccountEvent = new EventEmitter();
  @Output() removeAccountEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  editAccount() {
    this.editAccountEvent.emit();
  }
  removeAccount() {
    this.removeAccountEvent.emit();
  }
}
