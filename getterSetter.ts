class GetterSetterTest {
    private _test: number;
    static g: number = 10;
    protected p:string = "2";

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