import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Gender, AddModalMode } from 'src/app/types/types';
import { FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../clients-table/clients.service';
import { AddModalData } from 'src/app/models/specific.models';

@Component({
  selector: 'app-add-client-modal',
  templateUrl: './add-client-modal.component.html',
  styleUrls: ['./add-client-modal.component.scss']
})
export class AddClientModalComponent implements OnInit {
  genders = [
    { name: Gender.Male, value: Gender.Male },
    { name: Gender.Female, value: Gender.Female }
  ];
  clientForm;
  constructor(
    public dialogRef: MatDialogRef<AddClientModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogInputData: AddModalData,
    private fb: FormBuilder
  ) {
    this.clientForm = fb.group({
      firstName: fb.control('', Validators.required),
      lastName: fb.control('', Validators.required),
      gender: fb.control('', Validators.required),
      personalId: fb.control('', Validators.required),
      legalAddress: fb.group({
        country: fb.control('', Validators.required),
        city: fb.control('', Validators.required),
        address: fb.control('', Validators.required)
      }),
      mobileNumber: fb.control('', Validators.required),
      actualAddress: fb.group({
        country: fb.control('', Validators.required),
        city: fb.control('', Validators.required),
        address: fb.control('', Validators.required)
      }),
      pictureName: fb.control('', Validators.required),
      id: fb.control('')
    });
  }

  ngOnInit() {
    if (this.dialogInputData.mode === AddModalMode.Edit) {
      this.clientForm.patchValue(this.dialogInputData.data);
    }
  }

  submit() {
    if (this.clientForm.valid) {
      this.dialogRef.close(this.clientForm.value);
    }
  }
  onFileSelected(event) {
    this.clientForm.get('pictureName').patchValue(event);
  }

  public get addModalMode(): AddModalMode {
    return AddModalMode.Add;
  }

  public get editModalMode(): AddModalMode {
    return AddModalMode.Edit;
  }
}
