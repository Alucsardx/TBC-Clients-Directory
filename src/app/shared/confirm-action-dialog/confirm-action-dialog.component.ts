import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { AddClientModalComponent } from 'src/app/users-directory/add-client-modal/add-client-modal.component';

@Component({
  selector: 'app-confirm-action-dialog',
  templateUrl: './confirm-action-dialog.component.html',
  styleUrls: ['./confirm-action-dialog.component.scss']
})
export class ConfirmActionDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ConfirmActionDialogComponent>) {}

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }
  delete() {
    this.dialogRef.close(true);
  }
}

@NgModule({
  declarations: [ConfirmActionDialogComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ConfirmActionDialogComponent]
})
export class ConfirmActionDialogModule {}
