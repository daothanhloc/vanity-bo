import { Directive, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { LoopBackConfig } from '../api';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective implements OnChanges {

  @Input() imageSrc: string;
  @Input() audioSrc: string;
  @Input() colorPicker: string;

  constructor(
    
    private el: ElementRef
  ) { 
  }
  ngOnChanges(changes: SimpleChanges): void {
      this.changeImage();
  }
  changeImage() {
    if (this.el.nativeElement.tagName === 'IMG')
      this.el.nativeElement.src = this.getImage();
    else {
      console.log('a');
      this.el.nativeElement.src = this.getAudio();
    }
  }
  getImage() {
    if(this.imageSrc === '') {
      // TODO default
      return '';
      
    } else {
      const url = `${LoopBackConfig.getPath()}/${LoopBackConfig.getApiVersion()}/Containers/images/download/`;
      console.log(this.imageSrc);
      return url + this.imageSrc;
    }
  }
  getAudio() {
    if(this.audioSrc === '') {
      // TODO default
      return '';
      
    } else {
      const url = `${LoopBackConfig.getPath()}/${LoopBackConfig.getApiVersion()}/Containers/audio/download/`;
      console.log(this.audioSrc);
      return url + this.audioSrc;
    }
  } 
}
