// Цикли - реалізуйте функцію range
"use strict";

const range = (start,end) =>{
    const result = [];
    for (let n = start; n <= end; n++) { 
        result.push(n);
    }
    return result;
}

console.log(range(15,30))