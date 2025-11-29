//Робота з масивами і використання методів difference(array1, array2)
'use strict';

function difference(array1, array2) {
  return array1.filter(item => !array2.includes(item));
}

console.log(difference([5, -3, 20, 8, 0], [0, 12]));
console.log(difference(['Kyiv', 'Lugansk'], ['Zhytomyr', 'USA', 'Poland']));