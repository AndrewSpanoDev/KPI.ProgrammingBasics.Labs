//Функції - генератор пароля
"use strict";

function generateKey(length, character) {
  let key = "";
  for (let i = 0; i < length; i++) {
    key += character.charAt(Math.floor(Math.random() * character.length));
  }
  return key;
}

console.log(generateKey(16, "0123456789qwertyuiopasdfghjklzxcvbnm"));