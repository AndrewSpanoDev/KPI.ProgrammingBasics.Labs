//Робота з масивами і використання методів Array unique(array)
'use strict';

function unique(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

console.log(unique([3, 2, 1, 1, 3]));
console.log(unique(['top', 'bottom', 'top', 'left']));