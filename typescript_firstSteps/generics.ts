class someClass <TYPE1, TYPE2 extends string>{

    name : TYPE2;
    varA : TYPE1;
    varB : TYPE2;

    constructor(name : TYPE2, varA : TYPE1, varB : TYPE2){
        this.name = name;
        this.varA = varA;
        this.varB = varB;
    }

    printDescription() : void {
        console.log(`${this.name}, varA : ${this.varA}, varB : ${this.varB}`);
    }
}

let someVar = new someClass<number,string>("szymon",12,"szymon");
someVar.printDescription();