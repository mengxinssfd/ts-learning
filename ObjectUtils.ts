export class ObjectUtils {
    /**
     * 用法与Array.filter一样 返回一个新Object
     * @param target
     * @param callback
     */
    static filter(target: object, callback = (value: any, key: string): boolean => true): object {
        const obj: object = {};
        for (const key in target) {
            const value = target[key];
            if (target.hasOwnProperty(key) && callback(value, key)) {
                obj[key] = value;
            }
        }
        return obj;
    }
}

const test = {a: 123, b: 123444}
console.log(ObjectUtils.filter(test, function (value) {
    console.log(value)
    return true
}))