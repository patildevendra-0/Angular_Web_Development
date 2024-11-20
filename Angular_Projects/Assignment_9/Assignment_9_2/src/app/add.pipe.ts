import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'add',
  standalone: true
})
export class AddPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown 
  {
      let temp = 0;
      var iCnt = 0;

      for(iCnt=0;iCnt<args[0];iCnt++)
      {
        temp = value + temp;
      }

      return temp;
  }

}
