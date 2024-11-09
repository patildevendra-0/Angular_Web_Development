function Summation() {
    var Value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Value[_i] = arguments[_i];
    }
    var iCnt = 0;
    var iSum = 0;
    for (iCnt = 0; iCnt < Value.length; iCnt++) {
        iSum = iSum + Value[iCnt];
    }
    return iSum;
}
var iSum = Summation(11, 21, 51);
console.log("summation : ", iSum);
