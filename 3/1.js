//Функції - рандомне число
"use strict";

function randomInt(min, max) {
  return Math.floor(Math.random() * max);
}

console.log(randomInt(0, 1000));