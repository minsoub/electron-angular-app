import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { ipcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  images = new BehaviorSubject<string[]>([]);
  directory = new BehaviorSubject<string[]>([]);
  ipcRenderer: typeof ipcRenderer;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }


  constructor() { 
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
    }

    this.ipcRenderer.on('getImagesResponse', (event, images) =>{
      this.images.next(images);
    });
    this.ipcRenderer.on('getDirectoryResponse', (event, directory) => {
      console.log(directory.constructor.name);
      console.log(directory);
      console.log(JSON.stringify(directory));
      this.directory.next(directory);
    });
  }

  navigateDirectory(path) {
    this.ipcRenderer.send('navigateDirectory', path);
  }
}
