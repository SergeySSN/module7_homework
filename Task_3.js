//Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObject() {
    const obj = Object.create(null);
    console.log ("Oбъект-прототип: " + Object.getPrototypeOf(obj));
    console.log ("Kоличество свойств: " + Object.keys(obj).length);
}
emptyObject();