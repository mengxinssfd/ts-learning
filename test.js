var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    Person.prototype.test = function () {
        console.log(this.fullName);
    };
    return Person;
}());
var You = /** @class */ (function (_super) {
    __extends(You, _super);
    function You(firstName, lastName) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.test();
        return _this;
    }
    return You;
}(Person));
var a = new Person("a", "b");
var b = new You("a", "b");
var arr = [1, 2, NaN];
var arr2 = [1, 2, NaN];
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
// enum Color {Red, Green, Blue}
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(Color);
function f(s) {
    var x = 20;
    var x_2 = 1;
    if (s) {
        var x_1 = 10;
        x_1 = 30;
    }
    return x;
}
f(false);
for (var i = 0; i < 10; i++) {
    var _loop_1 = function (i_1) {
        setTimeout(function () {
            console.log(i_1);
        }, 100 * i_1);
    };
    for (var i_1 = 0; i_1 < 20; i_1++) {
        _loop_1(i_1);
    }
}
// TODO 类型推断出错
function test(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.a, a = _c === void 0 ? "" : _c, _d = _b.b, b = _d === void 0 ? 0 : _d;
    //     // ...
}
sdfs;
test();
