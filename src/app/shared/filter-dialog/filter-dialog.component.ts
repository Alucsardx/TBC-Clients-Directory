import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { Gender } from 'src/app/types/types';
import { Utils } from 'src/app/utils/utils';
import { utils } from 'protractor';
import { EventBusService } from '../services/event-bus.service';

@Component({
  selector: 'app-filter-dialog',
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent implements OnInit {
  genders = [
    { name: Gender.Male, value: Gender.Male },
    { name: Gender.Female, value: Gender.Female }
  ];
  filterForm;

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    private fb: FormBuilder,
    private eventBus: EventBusService
  ) {
    this.filterForm = fb.group({
      firstName: fb.control(''),
      lastName: fb.control(''),
      gender: fb.control(''),
      personalId: fb.control('')
    });
  }

  ngOnInit() {
    const filterJson = Utils.getItemFromLocalStorage('filters');
    if (filterJson) {
      this.filterForm.patchValue(JSON.parse(filterJson));
    }
  }
  submit() {
    Utils.setItemToLocalStorage(
      'filters',
      JSON.stringify(this.filterForm.value)
    );
    this.eventBus.emit('filterApplied', this.filterForm.value);
    this.dialogRef.close();
  }
}
@NgModule({
  declarations: [FilterDialogComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FilterDialogComponent],
  providers: [EventBusService]
})
export class FilterDialogModule {}
