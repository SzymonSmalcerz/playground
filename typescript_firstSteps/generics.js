var someClass = /** @class */ (function () {
    function someClass(name, varA, varB) {
        this.name = name;
        this.varA = varA;
        this.varB = varB;
    }
    someClass.prototype.printDescription = function () {
        console.log(this.name + ", varA : " + this.varA + ", varB : " + this.varB);
    };
    return someClass;
}());
var someVar = new someClass("szymon", 12, "szymon");
someVar.printDescription();
