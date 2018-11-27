import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    // To access attribute of element driectly is not best pratice.
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}