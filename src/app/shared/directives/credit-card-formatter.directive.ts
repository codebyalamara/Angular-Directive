import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCardFormatter]'
})
export class CreditCardFormatterDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  formatCard(eve: Event) {

    let ele = eve.target as HTMLInputElement;

    // Original value
    let rawVal = ele.value;

    // Spaces remove for validation and formatting
    let val = rawVal.replace(/\s/g, '');

    // Check invalid characters
    let isInvalid = /[^\d]/.test(val);

    // Maximum 16 digits
    if (val.length > 16) {
      val = val.substring(0, 16);
    }

    // Remove existing error message first
    let oldError = ele.parentElement?.querySelector('.card-error');

    if (oldError) {
      oldError.remove();
    }

    // Show error only once
    if (isInvalid) {

      let strong = document.createElement('strong');

      strong.className = 'text-danger card-error';

      strong.innerText = 'Please enter valid card details';

      ele.parentElement?.append(strong);
    }

    // Format card number
    let result = this.chunkArr(val, 4);

    ele.value = result;
  }


  chunkArr(str: string, limit: number): string {

    let arr: string[] = [];

    for (let i = 0; i < str.length; i += limit) {
      arr.push(str.slice(i, i + limit));
    }

    return arr.join(' ');
  }

}



















/* sir
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCreditCardFormatter]'
})
export class CreditCardFormatterDirective {

  constructor() { }

  @HostListener('keyup', ['$event'])
  formatCard(eve: Event) {
    let ele = eve.target as HTMLInputElement;
    let val: string = ele.value;
    console.log(val, val.length);
    if(val.length > 16){
      val = val.substring(0,16)
      console.log(val);
      // ele.value = val
    }

    if(/[^\d]/.test(val)){
      // show error 
      // ele.nextElementSibling?.classList.remove('d-none')
      let strong = document.createElement('strong')
      strong.className = 'text-danger';
      strong.innerText = 'Plz enter valid card details';
      ele.parentElement?.append(strong)

    }else{
      // error hide
      // ele.
      ele.nextElementSibling?.remove()
    }

    let result = this.chunkArr(val, 4)
    ele.value = result
    
    //this.chunkArr(val, 4)
  }

  chunkArr(str : string, limit: number){
    let arr = [];
    for (let i = 0; i < str.length; i = i + limit){
      arr.push(str.slice(i, i + limit))
    }
    console.log(arr)

  }
  

}

*/
