function Check_Prime_OR_Not(iNo) {
    var iCnt;
    var Counter = 0;
    for (iCnt = 1; iCnt <= iNo; iCnt++) {
        if (iNo % iCnt == 0) {
            Counter++;
        }
    }
    if (Counter > 2) {
        return false;
    }
    else {
        return true;
    }
}
var bFlag = Check_Prime_OR_Not(7);
if (bFlag == true) {
    console.log("IT IS PRIME NUMBER");
}
else {
    console.log("IT IS NOT PRIME NUMBER");
}
