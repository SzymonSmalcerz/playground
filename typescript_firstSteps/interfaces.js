var car;
// wrong assignments
// car = 10;
// car = "some car"
// correct assignments
car = {
    brand: "BMW",
    maxSpeed: 150,
    optionalInfo: "some optional info",
    getDescription: function () {
        return "brand of this car: " + this.brand + ", it's max speed: " + this.maxSpeed + " " + (this.optionalInfo ? ", " + this.optionalInfo : "");
    }
};
console.log(car.getDescription());
var someMercedes;
someMercedes = {
    brand: "mercedes",
    maxSpeed: 200,
    optionalInfo: "some optional info",
    getDescription: function () {
        return "some description";
    },
    getOptionalInfo: function () {
        return this.optionalInfo;
    }
};
