
function Area_Of_Circle(iRadius:number,PI?:number):number
{
    var Area:number;

    if(PI == undefined)
    {
        PI = 3.14;
    }

    Area = PI*iRadius*iRadius;
    return Area;
}


var iArea_Circle = Area_Of_Circle(2);
console.log("AREA OF CIRCLE : ",iArea_Circle);