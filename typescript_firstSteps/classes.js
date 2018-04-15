"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var TypeOfWehicle;
(function (TypeOfWehicle) {
    TypeOfWehicle[TypeOfWehicle["OVERLAND"] = 0] = "OVERLAND";
    TypeOfWehicle[TypeOfWehicle["AIRY"] = 1] = "AIRY";
    TypeOfWehicle[TypeOfWehicle["WATER"] = 2] = "WATER";
    TypeOfWehicle[TypeOfWehicle["UNDERWATER"] = 3] = "UNDERWATER";
})(TypeOfWehicle || (TypeOfWehicle = {}));
;
var Wehicle = /** @class */ (function () {
    function Wehicle(name, maxSpeed, type) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.type = type;
    }
    Wehicle.prototype.printDescription = function () {
        console.log(this.name + ", max speed : " + this.maxSpeed + ", type of wehcile : " + this.type);
    };
    ;
    return Wehicle;
}());
exports.Wehicle = Wehicle;
var someCar = new Wehicle("mercedes", 200, TypeOfWehicle.OVERLAND);
someCar.printDescription();
/* INHERITACE AND CLASSES */
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship(name, maxSpeed) {
        return _super.call(this, name, maxSpeed, TypeOfWehicle.WATER) || this;
    }
    return Ship;
}(Wehicle));
exports.Ship = Ship;
var someShip = new Ship("super ship", 70);
someShip.printDescription();
