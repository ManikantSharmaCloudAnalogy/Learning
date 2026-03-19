type Person = {
  name: string;
  age: number;
  email?: string; // Optional property
};

const person1: Person = {
  name: "Sara",
  age: 22,
};

const person2: Person = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

console.log(person1);
// Output: { name: 'Sara', age: 22 }
console.log(person2.email);