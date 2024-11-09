function Fibonacci_Number(iNo) {
    var iCnt = 0;
    var Series = [];
    var Prev_No_1 = 1;
    var Prev_No_2 = 0;
    var Current_No = 0;
    for (iCnt = 3; iCnt <= iNo; iCnt++) {
        Current_No = Prev_No_1 + Prev_No_2;
        Series.push(Current_No);
        Prev_No_2 = Prev_No_1; // Update Prev_No_2 to the previous Fibonacci number
        Prev_No_1 = Current_No; // Update Prev_No_1 to the current Fibonacci number
    }
    console.log("series : ", Series);
}
Fibonacci_Number(9);
