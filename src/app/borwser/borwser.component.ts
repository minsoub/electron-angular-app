import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-borwser',
  templateUrl: './borwser.component.html',
  styleUrls: ['./borwser.component.css']
})
export class BorwserComponent implements OnInit {
  images: string[];
  directory: string[];

  constructor(private imageService: ImagesService, 
    private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.imageService.images.subscribe((value) => {
      this.images = value;
      this.cdr.detectChanges();
    });
    this.imageService.directory.subscribe((value) => {
      this.directory = value;
      this.cdr.detectChanges();
    });
  }

  navigateDirectory(path) {
    this.imageService.navigateDirectory(path);
  }
}
