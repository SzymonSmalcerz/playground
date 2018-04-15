 enum TypeOfWehicle {
    OVERLAND,
    AIRY,
    WATER,
    UNDERWATER
};

class Wehicle {

    private name : string;
    private maxSpeed : number;
    private type : TypeOfWehicle;

    public constructor(name : string, maxSpeed : number, type : TypeOfWehicle){
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.type = type;
    }

    public printDescription() : void {
        console.log(`${this.name}, max speed : ${this.maxSpeed}, type of wehcile : ${this.type}`)
    };
}

let someCar = new Wehicle("mercedes",200, TypeOfWehicle.OVERLAND);
someCar.printDescription();

/* INHERITACE AND CLASSES */

 class Ship extends Wehicle {
     public constructor(name : string, maxSpeed : number){
         super(name,maxSpeed,TypeOfWehicle.WATER);
     }
 }

 let someShip = new Ship("super ship", 70);
 someShip.printDescription();


 export {Wehicle,Ship}