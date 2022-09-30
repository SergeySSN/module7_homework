//Реализуйте следующее консольное приложение подобно примеру, 
//который разбирался в видео. Реализуйте его на прототипах.

//Определите иерархию электроприборов. Включите некоторые в розетку. 
//Посчитайте потребляемую мощность (передайте аргумент). 

//Таких приборов должно быть как минимум два 
//(например, настольная лампа и компьютер). 
//Выбрав прибор, подумайте, какими свойствами он обладает.


/*Электроприборы:
Лампы
  Настольные/напольные/потолочные/настенные
  Цвет
  Тип цоколя Е40/Е27/Е10
  Тип лампочки LED/накаливания/
  мощность

Компьютеры 
  стационарный/мобильный
  рабочая станция/моноблок/desktop/laptop; 
  игровой/профессиональный/домашний;
  бренд
  цвет
  мощность*/


  function ElectroUnit(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
  }
 
  ElectroUnit.prototype.plugIn = function () {
    console.log(this.name + " is plugged! The power is " + this.power + " watt");
    this.isPlugged = true;
  };
  
  ElectroUnit.prototype.unplug = function () {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
  };
  
  function Lamp(name, type, color, bulb, brand, power) {
    this.name = name;
    this.type = type;
    this.color = color;
    this.bulb = bulb;
    this.brand = brand;
    this.power = power;
    this.isPlugged = true;
  }
  Lamp.prototype = new ElectroUnit();
  const homeLamp = new Lamp("Table lamp", "on-table", "black", "LED", "Omnilux", 12);

  function Computer(name, mobility, type, functionality, brand, power ) {
    this.name = name;
    this.mobility = mobility;
    this.type = type;
    this.functionality = functionality;
    this.brand = brand;
    this.power = power;
    this.isPlugged = false;
  }
  Computer.prototype = new ElectroUnit();
  const workPC = new Computer("Working PC", "stationary", "monoblock", "professional", "Mac", 500);
 
  homeLamp.plugIn();
  workPC.plugIn();
 
 