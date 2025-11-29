//Ітерування циклами array.prototype.reduce()
'use strict';

const sum = (...args) => {
  return args.reduce((acc, value) => acc + value, 0);
};

module.exports = { sum };