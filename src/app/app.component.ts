import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'filedetector';

  fileBrowseHandler(files: any): void {
    const fileList = files.target.files;
    console.log(fileList);
  }
}
