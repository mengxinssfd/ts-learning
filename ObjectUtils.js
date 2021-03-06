"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils = /** @class */ (function () {
    function ObjectUtils() {
    }
    /**
     * 用法与Array.filter一样 返回一个新Object
     * @param target
     * @param callback
     */
    // callback: (value: any, key: string) => boolean 是函数类型
    ObjectUtils.filter = function (target, callback) {
        if (callback === void 0) { callback = function (value, key) { return true; }; }
        // static filter(target: object, callback = (value: any, key: string): boolean => true): object {
        var obj = {};
        for (var key in target) {
            var value = target[key];
            if (target.hasOwnProperty(key) && callback(value, key)) {
                obj[key] = value;
            }
        }
        return obj;
    };
    return ObjectUtils;
}());
exports.ObjectUtils = ObjectUtils;
var test = { a: 123, b: 123444 };
console.log(ObjectUtils.filter(test, function (value) {
    console.log(value);
    return true;
}));
