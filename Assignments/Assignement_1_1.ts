
function Maximum_Number(...Value:number[]):number
{
    var iCnt:number = 0;
    var iMax:number = 0;

    for(iCnt=0;iCnt<Value.length;iCnt++)
    {
        if(iMax<Value[iCnt])
        {
            iMax = Value[iCnt];
        }
    }
    return iMax
}

var MaxNumber:number = Maximum_Number(10,900,30);
console.log("MAXIMUM NUMBER : ",MaxNumber);