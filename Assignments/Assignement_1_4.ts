
function Check_Prime_OR_Not(iNo:number):boolean
{
    var iCnt:number;
    var Counter:number = 0;

    for(iCnt=1;iCnt<=iNo;iCnt++)
    {
        if(iNo%iCnt==0)
        {
            Counter++;
        }
    }

    if(Counter>2)
    {
        return false;
    }
    else
    {
        return true;
    }

}

var bFlag:boolean = Check_Prime_OR_Not(7);

if(bFlag == true)
{
    console.log("IT IS PRIME NUMBER")

}
else
{
    console.log("IT IS NOT PRIME NUMBER")
}