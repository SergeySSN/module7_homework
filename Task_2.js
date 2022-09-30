//Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const strName = ('мама');
const myFamily = {мама: 'Аля', 
                  папа: 'Сережа', 
                  сын: 'Сеня'};
function checkName (str, myObject) {
    for (let key in myObject) {
        if (key == str) console.log ('Есть свойство с этим именем');
    }
}
checkName (strName, myFamily);