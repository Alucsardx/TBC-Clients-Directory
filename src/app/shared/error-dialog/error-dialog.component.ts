import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {
  message = 'Something Went Wrong';
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogInputData
  ) {}

  ngOnInit() {
    if (this.dialogInputData.message) {
      this.message = this.dialogInputData.message;
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [ErrorDialogComponent]
})
export class ErrorDialogModule {}
