//Ref Link
//https://stackoverflow.com/questions/35826325/how-to-convert-input-value-to-uppercase-in-angular-2-value-passing-to-ngcontrol
import { Directive, ElementRef, Input } from '@angular/core';
     @Directive({
     selector: '[UpperCase]',
     host: {
        '(input)': 'toUpperCase($event.target.value)',
     }
    })
    export class UppercaseDirective  {

    @Input('UpperCase') allowUpperCase: boolean;
    constructor(private ref: ElementRef) {
    }

    toUpperCase(value: any) {
        if (this.allowUpperCase)
        this.ref.nativeElement.value = value.toUpperCase();
    }

    }





// import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

// @Directive({
//   selector: '[ngModel][uppercase]'
// })
// export class UppercaseDirective {
//     @Output() ngModelChange: EventEmitter<any> = new EventEmitter();
//     value: any;
//     constructor(){
       
//     }
//     @HostListener('input', ['$event']) onInputChange($event) {
//       this.value = $event.target.value.toUpperCase();
//       this.ngModelChange.emit(this.value);
//     }
// }

// html for the 2nd directive

// <input type="text" class="form-control" placeholder="ID"
//            formControlName="id" [(ngModel)]="form.value.id" uppercase/>
