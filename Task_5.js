//Переписать консольное приложение из предыдущего юнита на классы.


class ElectroUnit  {
    constructor (name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
    }
    plugIn () {
      console.log(this.name + " is plugged! The power is " + this.power + " watt");
      this.isPlugged = true;
    };
    unplug () {
      console.log(this.name + " is unplugged!");
      this.isPlugged = false;
    };
  }
 
  //ElectroUnit.prototype.plugIn = function () {
  //  console.log(this.name + " is plugged! The power is " + this.power + " watt");
  //  this.isPlugged = true;
  //};
  
  //ElectroUnit.prototype.unplug = function () {
  //  console.log(this.name + " is unplugged!");
  //  this.isPlugged = false;
  //};
  
  class Lamp extends ElectroUnit {
    constructor (name, type, color, bulb, brand, power) {
        super ();
        this.name = name;
        this.type = type;
        this.color = color;
        this.bulb = bulb;
        this.brand = brand;
        this.power = power;
        this.isPlugged = true;
  }
}
  //Lamp.prototype = new ElectroUnit();
  const homeLamp = new Lamp("Table lamp", "on-table", "black", "LED", "Omnilux", 12);

  class Computer extends ElectroUnit {
        constructor (name, mobility, type, functionality, brand, power ) {
        super ();    
        this.name = name;
        this.mobility = mobility;
        this.type = type;
        this.functionality = functionality;
        this.brand = brand;
        this.power = power;
        this.isPlugged = false;
  }
}
  //Computer.prototype = new ElectroUnit();
  const workPC = new Computer("Working PC", "stationary", "monoblock", "professional", "Mac", 500);
 
  homeLamp.plugIn();
  workPC.plugIn();
  homeLamp.unplug();
  workPC.unplug();