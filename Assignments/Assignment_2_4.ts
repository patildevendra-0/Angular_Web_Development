
var Armstrong = (iNo:number)=>
{
    var No_str:string = iNo.toString();
    var num_digits = No_str.length;


    var sum_power = No_str.split('').map(digit=> parseInt(digit)**(num_digits)).reduce((accurance,current)=>accurance+current,0);

    return sum_power === iNo;

}

console.log(Armstrong(153));  // true
console.log(Armstrong(123));  //false