function Factors(iNo) {
    var Factors_A = [];
    var iCnt = 0;
    for (iCnt = 1; iCnt <= iNo; iCnt++) {
        if (iNo % iCnt == 0) {
            Factors_A.push(iCnt);
        }
    }
    return Factors_A;
}
function Display_Factors(Factors) {
    var iCnt = 0;
    for (iCnt = 0; iCnt < Factors.length; iCnt++) {
        console.log(Factors[iCnt]);
    }
}
var Factors_A = [];
Factors_A = Factors(12);
Display_Factors(Factors_A);
