// 1. Basic Types
var num = 42;
var str = "Hello TypeScript";
var isDone = true;
// 2. Array Types
var numbers = [1, 2, 3];
var strings = ["a", "b", "c"];
// 3. Tuple
var tuple = ["Age", 25];
// 4. Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
// 5. Any
var randomValue = "Could be anything";
randomValue = 10;
// 6. Unknown
var unknownValue = "Test";
if (typeof unknownValue === "string") {
    console.log("Unknown is string:", unknownValue.toUpperCase());
}
// 7. Void (function with no return)
function logMessage(msg) {
    console.log("Void function:", msg);
}
// 8. Null & Undefined
var u = undefined;
var n = null;
// 9. Never (function that never returns)
function throwError(message) {
    throw new Error(message);
}
// 10. Object
var person = {
    name: "John",
    age: 30
};
var user = { id: 1, username: "Alice" };
// 12. Union Type
var id;
id = 101;
id = "ID101";
var intersect = { a: 1, b: "Both" };
// 14. Literal Types
var direction;
direction = "left";
// 15. Function Type
var add;
add = function (x, y) { return x + y; };
// 16. Class
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.speak = function () {
        console.log(this.name + " makes a noise.");
    };
    return Animal;
}());
var dog = new Animal("Dog");
var car = { brand: "Toyota", speed: 120 };
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
