//Функції вищого порядку store(value)   
'use strict';

const store = (x) => {
  return () => x;
};

module.exports = { store };