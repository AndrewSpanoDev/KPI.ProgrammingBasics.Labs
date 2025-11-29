//Робота з масивами і використання методів Array removeElement(array, item)
'use strict';

function removeElement(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      array.splice(i, 1);
      break; 
    }
  }
}

const array1 = [1, 2, 3, 4, 5, 6, 7];
removeElement(array1, 3);
console.log(array1); 



const array2 = ['Kiev', 'Rostov', 'Baran', 'Xyivs'];
removeElement(array2, 'Kiev');    
removeElement(array2, 'Berlin');  
console.log(array2  ); 