
/*
* first big (after all the biggest) difference between typescript and javascript
* are types, in ts you can assign type to variable, and then you can't assign
* any other type to this variable
*/

/* EXAMPLE 1 */

let someInteger : number;
someInteger = 10;
// someInteger = "random string";
// someInteger = [10,120];         //you can't assign any other type than number to "someInteger" variable !

    // any type :
    // there is something like "any" type in ts ( by default every variable in ts has this type,
    // you can say that in js every variable has this type ). You can assign literally ANY type
    // to this variable

let someAnyTypeVariable : any;
someAnyTypeVariable = 10;
someAnyTypeVariable = "random string";
someAnyTypeVariable = [10,120];


/* EXAMPLE 2 => arrays */

let someStringArray : [string];
someStringArray = ["asd","asd","adsdd","eee"];
// someStringArray = "random string";
// someStringArray = [10,120];         //you can't assign any other type than [string] to "someStringArray" variable !

let someMoreComplexArray : [[string,number]];
someMoreComplexArray = [["sd",1],["second",7]];
// someMoreComplexArray = "random string";
// someMoreComplexArray = [10,120];         //you can't assign any other type than [[string,number] to "someMoreComplexArray" variable !


