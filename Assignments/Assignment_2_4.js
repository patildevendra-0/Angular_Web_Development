var Armstrong = function (iNo) {
    var No_str = iNo.toString();
    var num_digits = No_str.length;
    var sum_power = No_str.split('').map(function (digit) { return Math.pow(parseInt(digit), (num_digits)); }).reduce(function (accurance, current) { return accurance + current; }, 0);
    return sum_power === iNo;
};
console.log(Armstrong(153)); // true
console.log(Armstrong(9474)); // true
console.log(Armstrong(123));
