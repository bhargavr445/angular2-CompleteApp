import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {
  // @Input() hoverColor:string;
  @Input() appMouseOver:string;
  
  constructor(private ef:ElementRef) { 
    //this.ef.nativeElement.style.backgroundColor='green';
  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.highlight(this.appMouseOver);
  }

  @HostListener('mouseleave') 
  onMouseLeave() {
    this.highlight(null);
  }

  public highlight(color){
    this.ef.nativeElement.style.backgroundColor=color;
  }

}
