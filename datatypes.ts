// 1. Basic Types
let num: number = 42;
let str: string = "Hello TypeScript";
let isDone: boolean = true;

// 2. Array Types
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// 3. Tuple
let tuple: [string, number] = ["Age", 25];

// 4. Enum
enum Color {
  Red,
  Green,
  Blue
}
let myColor: Color = Color.Green;

// 5. Any
let randomValue: any = "Could be anything";
randomValue = 10;

// 6. Unknown
let unknownValue: unknown = "Test";
if (typeof unknownValue === "string") {
  console.log("Unknown is string:", unknownValue.toUpperCase());
}

// 7. Void (function with no return)
function logMessage(msg: string): void {
  console.log("Void function:", msg);
}

// 8. Null & Undefined
let u: undefined = undefined;
let n: null = null;

// 9. Never (function that never returns)
function throwError(message: string): never {
  throw new Error(message);
}

// 10. Object
let person: { name: string; age: number } = {
  name: "John",
  age: 30
};

// 11. Type Alias
type User = {
  id: number;
  username: string;
};
let user: User = { id: 1, username: "Alice" };

// 12. Union Type
let id: number | string;
id = 101;
id = "ID101";

// 13. Intersection Type
type A = { a: number };
type B = { b: string };
let intersect: A & B = { a: 1, b: "Both" };

// 14. Literal Types
let direction: "left" | "right";
direction = "left";

// 15. Function Type
let add: (x: number, y: number) => number;
add = (x, y) => x + y;

// 16. Class
class Animal {
  constructor(public name: string) {}
  speak() {
    console.log(this.name + " makes a noise.");
  }
}
let dog = new Animal("Dog");

// 17. Interface
interface Car {
  brand: string;
  speed: number;
}
let car: Car = { brand: "Toyota", speed: 120 };

// ===== Printing All Values =====
console.log("Number:", num);
console.log("String:", str);
console.log("Boolean:", isDone);
console.log("Number Array:", numbers);
console.log("String Array:", strings);
console.log("Tuple:", tuple);
console.log("Enum:", myColor);
console.log("Any:", randomValue);
console.log("Undefined:", u);
console.log("Null:", n);
console.log("Object:", person);
console.log("Type Alias:", user);
console.log("Union:", id);
console.log("Intersection:", intersect);
console.log("Literal:", direction);
console.log("Function Add:", add(5, 3));
dog.speak();
console.log("Interface:", car);

// Call void function
logMessage("Hello from void function");

// Uncomment to test never (will crash)
// throwError("This is an error!");


var a=20;
var b:string=a.toString();
console.log(b);