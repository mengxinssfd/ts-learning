function getProperty(obj, key) {
    // 文档里的说会报错，但实际不会，需要加<T, K extends keyof T>
    // function getProperty(obj: T, key: K) {
    return obj[key];
}
var xss = { a: 1, b: 2, c: 3, d: 4 };
getProperty(xss, "a"); // okay
getProperty(xss, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
