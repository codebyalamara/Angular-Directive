
import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appCssAdvance]'
})
export class CssAdvanceDirective implements OnInit {

  constructor(
    private _elRef: ElementRef,
    private _renderer: Renderer2
  ) { }

  ngOnInit(): void {

    // NORMAL STATE - HOT PINK
    this._renderer.setStyle(
      this._elRef.nativeElement,
      'background-color',
      '#db2777'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'color',
      '#ffffff'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'padding',
      '20px 25px'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'border-radius',
      '12px'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'border',
      '1px solid #f472b6'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'transition',
      'all 0.3s ease'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'box-shadow',
      '0 5px 15px rgba(219, 39, 119, 0.25)'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'cursor',
      'pointer'
    );
  }


  @HostListener('mouseover')
  demo1(): void {

    // HOVER - CHARCOAL
    this._renderer.setStyle(
      this._elRef.nativeElement,
      'background-color',
      '#292524'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'color',
      '#fce7f3'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'border-color',
      '#57534e'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'transform',
      'translateY(-4px)'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'box-shadow',
      '0 10px 25px rgba(0, 0, 0, 0.25)'
    );
  }


  @HostListener('mouseout')
  demo2(): void {

    // BACK TO HOT PINK
    this._renderer.setStyle(
      this._elRef.nativeElement,
      'background-color',
      '#db2777'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'color',
      '#ffffff'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'border-color',
      '#f472b6'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'transform',
      'translateY(0)'
    );

    this._renderer.setStyle(
      this._elRef.nativeElement,
      'box-shadow',
      '0 5px 15px rgba(219, 39, 119, 0.25)'
    );
  }

}














/*
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCssAdvance]'
})
export class CssAdvanceDirective implements OnInit {

  constructor(
    private _elRef : ElementRef,
    private _renderer : Renderer2
  ) { }

  ngOnInit(): void {
    //  this._elRef.nativeElement.style.backgroundColor = 'blueviolet'
    //  this._renderer.setStyle(this._elRef.nativeElement, "background-color", "orange")
    //  this._renderer.setStyle(this._elRef.nativeElement, 'color', '#fff')
    //  this._renderer.setStyle(this._elRef.nativeElement, 'padding', '15px')
    //this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'hotpink')
    //this._renderer.setStyle(this._elRef.nativeElement, 'padding', '15px')
    // this._renderer.addClass(this._elRef.nativeElement, 'alert')
    // this._renderer.addClass(this._elRef.nativeElement, 'alert-info')

    

  }

  @HostListener('mouseover')
  demo1(){
    this._renderer.setStyle(this._elRef.nativeElement, 'background-color', 'orange')
    this._renderer.setStyle(this._elRef.nativeElement, 'color', '#fff')
    this._renderer.setStyle(this._elRef.nativeElement, 'padding', '15px')

  }

  @HostListener('mouseout')
  demo2(){
    this._renderer.setStyle(this._elRef.nativeElement, "background-color", "transparent")
    this._renderer.setStyle(this._elRef.nativeElement, "color", "#000")
  }

}


// Angular universal == SSR 
// Angular 18+ == SSR, CSR 
// mobile app convert (Ionic)
// window , document object 


// XSS Attack 
// .innerHTML 
// mere dusre web html/link :: domSantizer(html)


// Platform :: web , mobile or SSR 
// Security :: XSS >> Safe 
// Testing :: Easy

*/

