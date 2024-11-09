function Maximum_2nd_Number() {
    var Value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Value[_i] = arguments[_i];
    }
    var iMax = -Infinity;
    var imax = -Infinity;
    for (var iCnt = 0; iCnt < Value.length; iCnt++) {
        if (Value[iCnt] > iMax) {
            imax = iMax;
            iMax = Value[iCnt];
        }
        else if (Value[iCnt] > imax && Value[iCnt] !== iMax) {
            imax = Value[iCnt];
        }
    }
    return imax;
}
var MaxNumber = Maximum_2nd_Number(10, 20, 30, 50, 8);
console.log("2nd MAXIMUM NUMBER: ", MaxNumber);
