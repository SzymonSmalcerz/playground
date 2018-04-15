interface carInterface {

    // mandatory variables
    maxSpeed : number;
    brand    : string;

    // optional variables
    optionalInfo?:string;

    // functions
    getDescription() : string;
}

let car : carInterface;

    // wrong assignments
// car = 10;
// car = "some car"

    // correct assignments
car = {
    brand: "BMW",
    maxSpeed: 150,
    optionalInfo: "some optional info",
    getDescription(): string {
        return `brand of this car: ${this.brand}, it's max speed: ${this.maxSpeed} ${this.optionalInfo ? ", " + this.optionalInfo : ""}`;
    }
};

console.log(car.getDescription());

/* INHERITANCE AND INTERFACES */

interface mercedesInterface extends carInterface {
    brand : string;
    // now optionalInfo is mandatory ! (we override "?" sign)
    optionalInfo:string;
    getOptionalInfo() : string;
}

let someMercedes : mercedesInterface;
someMercedes = {
    brand: "mercedes",
    maxSpeed: 200,
    optionalInfo: "some optional info",
    getDescription(): string {
        return "some description";
    },
    getOptionalInfo(): string {
        return this.optionalInfo;
    }

};