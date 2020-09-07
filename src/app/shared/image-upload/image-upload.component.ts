import {
  Component,
  OnInit,
  NgModule,
  Output,
  EventEmitter,
  Input
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  error: Error = {
    error: false,
    message: ''
  };

  @Input() imageInBase64;

  constructor() {}

  @Output() fileSelected = new EventEmitter();
  ngOnInit() {}

  onFileSelected(evt) {
    const files = evt.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this.handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(readerEvt) {
    const binaryString = readerEvt.target.result;
    this.imageInBase64 = btoa(binaryString);
    this.fileSelected.emit(this.imageInBase64);
  }

  getImageStyle() {
    if (this.imageInBase64) {
      return {
        backgroundImage: `url("data:image;base64,${this.imageInBase64}")`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      };
    }
  }
}

export class Error {
  error: boolean;
  message: string;
}

@NgModule({
  declarations: [ImageUploadComponent],
  imports: [CommonModule],
  exports: [ImageUploadComponent]
})
export class ImageUploadModule {}
