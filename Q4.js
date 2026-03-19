/*
Question 4:-
 You are given a deeply nested object. Flatten the object such that all properties from the nested objects are brought to the top level. Arrays should remain as arrays without being flattened.
Input
A nested object with keys representing objects, arrays, or primitive values.
Output
A flat object where all nested properties are promoted to the top level. Arrays should remain unchanged.
Constraints
The object can have any depth.
If an array is found, it remains intact.
Example 1:
Input:
const input = {
 user: {
   name: "John",
   address: {
     city: "Delhi",
     zip: 110001
   },
   profile: {
     details: {
       age: 30,
       email: "john.doe@example.com",
       hobbies: ["Reading", "Travelling"],
     }
   }
 }
};
Output:
{
 "name": "John",
 "city": "Delhi",
 "zip": 110001,
 "hobbies": ["Reading", "Travelling"],
 "age": 30,
 "email": "john.doe@example.com"
}


*/



//answer of the q4.
const input = {
 user: {
   name: "John",
   address: {
     city: "Delhi",
     zip: 110001
   },
   profile: {
     details: {
       age: 30,
       email: "john.doe@example.com",
       hobbies: ["Reading", "Travelling"],
     }
   }
 }
};
//object property extract
let result={};
result.name=input.user.name;
result.city=input.user.address.city;
result.zip=input.user.address.zip;
result.hobbies=input.user.profile.details.hobbies;
result.age=input.user.profile.details.age;
result.email=input.user.profile.details.email
console.log(result);
