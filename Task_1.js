//Написать, функцию, которая принимает в качестве аргумента объект 
//и выводит в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.

const myFamily = {мама: 'Аля', 
                  папа: 'Сережа', 
                  сын: 'Сеня'}

function getKeys_and_Values (myObject) {
         for (let key in myObject) {
             console.log(key);
             if (myObject.hasOwnProperty(key)) {
             console.log(myObject[key]);
             }
         }
}

getKeys_and_Values (myFamily);

  
  
