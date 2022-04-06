const sumAll = function (firstNum, lastNum) {
    // returning 'ERROR' if not a number; less that 0; is a string
    if (isNaN(firstNum) || isNaN(lastNum)) return 'ERROR';
    if (typeof (firstNum) == "string" || typeof (lastNum) == "string") return 'ERROR';
    if (firstNum < 0 || lastNum < 0) return 'ERROR';
    // sorting from smallest to biggest
    let min = Math.min(firstNum, lastNum)
    let max = Math.max(firstNum, lastNum)
    // using a for loop
    let sum = 0;
    for (let j = min; j <= max; j++) {
        sum = sum + j;
    }
    return sum;
    //using an algorithm
    /*    let num = (max - min + 1);
       let sumNum = num * (min + max) / 2;
       return sumNum */
};

// Do not edit below this line
module.exports = sumAll;
