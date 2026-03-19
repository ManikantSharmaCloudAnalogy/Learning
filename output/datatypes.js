// 1. Basic Types
let num = 42;
let str = "Hello TypeScript";
let isDone = true;
// 2. Array Types
let numbers = [1, 2, 3];
let strings = ["a", "b", "c"];
// 3. Tuple
let tuple = ["Age", 25];
// 4. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Green;
// 5. Any
let randomValue = "Could be anything";
randomValue = 10;
// 6. Unknown
let unknownValue = "Test";
if (typeof unknownValue === "string") {
    console.log("Unknown is string:", unknownValue.toUpperCase());
}
// 7. Void (function with no return)
function logMessage(msg) {
    console.log("Void function:", msg);
}
// 8. Null & Undefined
let u = undefined;
let n = null;
// 9. Never (function that never returns)
function throwError(message) {
    throw new Error(message);
}
// 10. Object
let person = {
    name: "John",
    age: 30
};
let user = { id: 1, username: "Alice" };
// 12. Union Type
let id;
id = 101;
id = "ID101";
let intersect = { a: 1, b: "Both" };
// 14. Literal Types
let direction;
direction = "left";
// 15. Function Type
let add;
add = (x, y) => x + y;
// 16. Class
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " makes a noise.");
    }
}
let dog = new Animal("Dog");
let car = { brand: "Toyota", speed: 120 };
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
var a = 20;
var b = a.toString();
console.log(b);
export {};
//# sourceMappingURL=datatypes.js.map