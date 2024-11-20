import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplication',
  standalone: true
})
export class MultiplicationPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown 
  {
      let temp = 1;
      var iCnt = 0;

      for(iCnt=0;iCnt<args[0];iCnt++)
      {
        temp = value * temp;
      }

      return temp;
  }

}
