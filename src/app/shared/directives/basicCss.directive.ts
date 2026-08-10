import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[basicCss]'
})
export class BasicCssDirective implements OnInit {

  constructor (

    private _elRef: ElementRef,
    private _renderer : Renderer2
  ){

  }
  ngOnInit(): void {
      console.log(this._elRef.nativeElement)
      //this._elRef.nativeElement.style.backgroundColor = 'orange'
      //this._elRef.nativeElement.style.color = 'white'
      //this._elRef.nativeElement.style.padding = '10px'
      this._elRef.nativeElement.classList.add('alert', 'alert-danger')
  }
  

}













