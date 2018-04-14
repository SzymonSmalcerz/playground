var Example = /** @class */ (function () {
    function Example(c) {
        this.a = 0;
        this.b = 0;
        this.d = "aaa";
        this.aaaa = "asdsda";
        this.c = c;
    }
    Example.prototype.run = function () {
        alert("hello");
    };
    return Example;
}());
var temp = new Example("example");
