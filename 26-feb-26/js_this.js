//Js this
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


//call method

const person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person2 = {
  firstName:"John",
  lastName: "Doe",
}

// Return "John Doe":
person1.fullName.call(person2);



//bind borrow method

const person3 = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName:"Hege",
  lastName: "Nilsen",
}

let fullName = person3.fullName.bind(member);


//object.entries

const people = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};

let text = Object.entries(people);
console.log(text);

//getter and setter 

// Create a(n object:
const people2 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:

//getter method
console.log(people2.lang);

//setter method
const people3 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
people3.lang = "en";

// Display data from the object:
console.log(people3);




//object prototype
console.log("object prototype ");
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(myFather);
console.log(myMother);

//you cant add new property to object constructor but with the help of prototype you can add property 
