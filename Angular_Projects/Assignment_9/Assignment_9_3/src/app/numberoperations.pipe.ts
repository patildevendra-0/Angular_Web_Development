import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberoperations',
  standalone: true
})
export class NumberoperationsPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let temp_s = " ";
    let sum = 0;
    let count = 0;

    // Edge case: Handle negative or zero values
    if (value <= 0) {
      return "Value must be a positive number.";
    }

    // Prime Check
    if (args[0] === "Prime") {
      for (let iCnt = 1; iCnt <= value; iCnt++) {
        if (value % iCnt === 0) {
          count++;
        }
      }
      if (count > 2) {
        temp_s = "Is Not a Prime Number";
      } else {
        temp_s = "Is a Prime Number";
      }
    }

    // Even Check
    else if (args[0] === "Even") {
      if (value % 2 === 0) {
        temp_s = "Is an Even Number";
      } else {
        temp_s = "Is Not an Even Number";
      }
    }

    // Odd Check
    else if (args[0] === "Odd") {
      if (value % 2 !== 0) {
        temp_s = "Is an Odd Number";
      } else {
        temp_s = "Is Not an Odd Number";
      }
    }

    // Perfect Number Check
    else if (args[0] === "Perfect") {
      sum = 0;
      for (let iCnt = 1; iCnt < value; iCnt++) { // Start from 1 to avoid including the number itself
        if (value % iCnt === 0) {
          sum += iCnt;
        }
      }
      if (sum === value) {
        temp_s = "Is a Perfect Number";
      } else {
        temp_s = "Is Not a Perfect Number";
      }
    }

    return temp_s;
  }
}
