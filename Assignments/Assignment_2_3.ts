function Maximum_2nd_Number(...Value: number[]): number 
{
  
    let iMax = -Infinity;
    let imax = -Infinity;

    for (let iCnt = 0; iCnt < Value.length; iCnt++) {
        if (Value[iCnt] > iMax) {
            imax = iMax;
            iMax = Value[iCnt];
        } else if (Value[iCnt] > imax && Value[iCnt] !== iMax) {
            imax = Value[iCnt];
        }
    }

    return imax;
}

let MaxNumber: number = Maximum_2nd_Number(10, 20, 30, 50, 8);
console.log("2nd MAXIMUM NUMBER: ", MaxNumber);
