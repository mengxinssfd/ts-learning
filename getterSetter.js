var GetterSetterTest = /** @class */ (function () {
    function GetterSetterTest() {
        this.p = "2";
    }
    Object.defineProperty(GetterSetterTest.prototype, "test", {
        get: function () {
            console.log("get");
            return this._test;
        },
        set: function (value) {
            console.log("set");
            this._test = value;
        },
        enumerable: true,
        configurable: true
    });
    GetterSetterTest.g = 10;
    return GetterSetterTest;
}());
var test = new GetterSetterTest();
test.test = 10;
console.log(test.test);
