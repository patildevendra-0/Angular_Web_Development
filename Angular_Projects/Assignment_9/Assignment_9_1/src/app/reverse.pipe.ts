import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown 
  {
    var temp:string = value;
    var Rev_string = temp.split('').reverse().join('');
    /*  split(''): Converts the string into an array of characters.
        reverse(): Reverses the array.
        join(''): Joins the array back into a string.*/ 

    return Rev_string;

  }

}
