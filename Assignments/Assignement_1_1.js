function Maximum_Number() {
    var Value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Value[_i] = arguments[_i];
    }
    var iCnt = 0;
    var iMax = 0;
    for (iCnt = 0; iCnt < Value.length; iCnt++) {
        if (iMax < Value[iCnt]) {
            iMax = Value[iCnt];
        }
    }
    return iMax;
}
var MaxNumber = Maximum_Number(10, 900, 30);
console.log("MAXIMUM NUMBER : ", MaxNumber);
