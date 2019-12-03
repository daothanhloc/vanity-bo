import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { LoopBackAuth, LoopBackConfig } from '../api';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective implements OnChanges {
  @Input('appImage') imageSrc: string;
  @Input() containerId: string;
  constructor(
    
    private el: ElementRef
  ) { 
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.path) {
      this.changeImage();
    }
  }
  changeImage() {
    if (this.el.nativeElement.tagName === 'IMG')
    this.el.nativeElement.src = this.getImage();
  }
  getImage() {
    if(this.imageSrc === '') {
      // TODO default
      return '';
      
    } else {
      const url = `${LoopBackConfig.getPath()}/${LoopBackConfig.getApiVersion()}/Containers/` + this.containerId + '/downloads/';
      return url + this.imageSrc;
    }
  } 

}
