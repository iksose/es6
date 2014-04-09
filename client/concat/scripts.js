"use strict";
var __moduleName = "scripts";
console.log("hmm");
var evens = [2, 4, 6, 8];
var odds = evens.map((function(v) {
  return v + 1;
}));
var nums = evens.map((function(v, i) {
  return v + i;
}));
console.log("Nums", nums);
var melter = function(obj) {
  var temp = obj;
  temp.melted = "melted";
  return temp;
};
var empty = (function() {});
var Car = function Car(make) {
  this.make = make;
  this.currentSpeed = 25;
};
($traceurRuntime.createClass)(Car, {printCurrentSpeed: function() {
    console.log(this.make + ' is going ' + this.currentSpeed + ' mph.');
  }}, {});
var RaceCar = function RaceCar(make, topSpeed) {
  $traceurRuntime.superCall(this, $RaceCar.prototype, "constructor", [make]);
  this.topSpeed = topSpeed;
};
var $RaceCar = RaceCar;
($traceurRuntime.createClass)(RaceCar, {goFast: function() {
    this.currentSpeed = this.topSpeed;
  }}, {}, Car);
var stang = new RaceCar('Mustang', 150);
var prius = new Car('Prius', 100);
stang.printCurrentSpeed();
stang.goFast();
stang.printCurrentSpeed();
prius.printCurrentSpeed();
var num = 0;
{
  try {
    throw undefined;
  } catch ($i) {
    $i = 0;
    for (; $i < 10; $i++) {
      try {
        throw undefined;
      } catch (i) {
        i = $i;
        try {
          num += i;
          console.log('value of i in block: ' + i);
        } finally {
          $i = i;
        }
      }
    }
  }
}
console.log('Is i defined here?: ' + (typeof i !== 'undefined'));
