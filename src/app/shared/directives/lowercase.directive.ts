import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLowercase]'
})
export class LowercaseDirective {

  constructor() { }

  @HostListener('keyup', ['$evevt'])
  onSearch(eve : Event){
    let ele = (eve.target as HTMLInputElement)
    let val = (ele.value as string).toLowerCase()
    console.log(val)
    ele.value = val 
  }

}
