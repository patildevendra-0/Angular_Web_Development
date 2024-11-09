

function Factors(iNo:number):number[]
{
    var Factors_A:number[] = [];
    var iCnt:number = 0;

    for(iCnt=1;iCnt<=iNo;iCnt++)
    {
        if(iNo%iCnt == 0)
        {
            Factors_A.push(iCnt);
        }
    }

    return Factors_A;
}

function Display_Factors(Factors:number[]):void
{
    var iCnt:number = 0;

    for(iCnt=0;iCnt<Factors.length;iCnt++)
    {
      console.log(Factors[iCnt]);
    }
}



var Factors_A:number[] = [];
Factors_A = Factors(12);
Display_Factors(Factors_A);