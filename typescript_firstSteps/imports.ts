//old way :

import {Ship} from "./classes";

let someOldShip = new Ship("old ship", 900);
someOldShip.printDescription();


//new way :

import * as wehicles from "./classes"

let someNewShip = new wehicles.Ship("some super new  ship", 700);
someNewShip.printDescription();