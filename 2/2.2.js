// Цикли - реалізуйте функцію rangeOdd
"use strict";

const rangeOdd = (start,end) =>{
    const result = [];
    for (let n = start;n <= end;n++) {
        if (n % 2 !==0) {
            result.push(n);
        }
    }
    return result;
}

console.log(rangeOdd(15,30));