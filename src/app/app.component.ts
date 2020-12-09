import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Image Browser';

  constructor(
    private imageService: ImagesService
    ) {
      if (imageService.isElectron)
      {
        console.log(process.env);
        console.log('Run in electron');
        console.log('Electron ipcRenderer', this.imageService.ipcRenderer);
      }else {
        console.log('Run in browser');
      }
    }

  ngOnInit(): void {
    this.imageService.navigateDirectory('.');
  }
  
}