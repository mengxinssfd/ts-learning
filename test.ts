class Person {
    firstName: string;
    lastName: string;
    fullName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = `${firstName} ${lastName}`;
    }

    test(): any {
        console.log(this.fullName);
    }

}

class You extends Person {

    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
        this.test();
    }
}

let a: Person = new Person("a", "b");
let b: Person = new You("a", "b");

let arr: Array<number> = [1, 2, NaN];
let arr2: number[] = [1, 2, NaN];

let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// enum Color {Red, Green, Blue}
enum Color {Red = 1, Green = 2, Blue = 4}

let c: Color = Color.Green;
console.log(Color)

function f(s) {
    let x = 20;
    if (s) {
        let x = 10;
        x = 30;
    }
    return x;
}

f(false)