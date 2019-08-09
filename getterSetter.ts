class GetterSetterTest {
    private _test: number;

    get test(): number {
        console.log("get")
        return this._test;
    }

    set test(value: number) {
        console.log("set")
        this._test = value;
    }
}

const test = new GetterSetterTest();
test.test = 10;
console.log(test.test)