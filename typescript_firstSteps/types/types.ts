let car : string;
let engine : number;
let isFast: boolean;

// car = 1; wont work, only string permitted !
car = "bmw"

// let cars = ["BMW", "MERCEDES","NISSAN"];
// cars = ["!","1","2"];

let cars : any[] = ["BMW", "MERCEDES","NISSAN"];
cars = ["!","1","2"];
cars = [1,2,3];

/* FUNCTIONS */

function sum(a:number,b:number){
  return a+b;
}

let result = sum(1,2);
