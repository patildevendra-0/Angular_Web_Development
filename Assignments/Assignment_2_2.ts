
function Summation(...Value:number[]):number
{
    var iCnt:number = 0;
    var iSum:number = 0;

    for(iCnt=0;iCnt<Value.length;iCnt++)
    {
        iSum = iSum+Value[iCnt];
    }
    return iSum
}

var iSum:number = Summation(11,21,51);
console.log("summation : ",iSum);