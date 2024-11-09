
function Fibonacci_Number(iNo:number)
{
    var iCnt:number = 0;
    var Series:number[] = [];
    var Prev_No_1:number = 1;
    var Prev_No_2:number = 0;
    var Current_No:number = 0;

    for (iCnt = 3; iCnt <= iNo; iCnt++) {
        Current_No = Prev_No_1 + Prev_No_2;
        Series.push(Current_No);
        Prev_No_2 = Prev_No_1; // Update Prev_No_2 to the previous Fibonacci number
        Prev_No_1 = Current_No; // Update Prev_No_1 to the current Fibonacci number
    }

    console.log("series : ",Series);
}

Fibonacci_Number(9);