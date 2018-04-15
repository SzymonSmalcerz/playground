"use strict";
//old way :
exports.__esModule = true;
var classes_1 = require("./classes");
var someOldShip = new classes_1.Ship("old ship", 900);
someOldShip.printDescription();
//new way :
var wehicles = require("./classes");
var someNewShip = new wehicles.Ship("some super new  ship", 700);
someNewShip.printDescription();
