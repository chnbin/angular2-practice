import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

  // Bind properties of host, we can access the binded property by member variable.
  @HostBinding('style.backgroundColor') bgColor: string = 'transparent';
  @HostBinding('style.color') fontColor: string = 'black';
  @HostBinding('style.fontSize') fontSize: string = '1em';

  constructor(private elRef: ElementRef, private renderer: Renderer2){
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseover') mouseover() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '1em');
    this.bgColor = 'red';
    this.fontColor = 'white';
    this.fontSize = '1em';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'black');
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '1em');
    this.bgColor = 'transparent';
    this.fontColor = 'black';
    this.fontSize = '1em';
  }

  @HostListener('click') click() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    // this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '2em');
    this.bgColor = 'blue';
    this.fontColor = 'white';
    this.fontSize = '2em';
  }
}