//reverse words in string
let str="hello i am mani";
let result= str.split(" ").reverse().join(" ");
console.log(result);


let string = "hello mani";
let res = "";
let word = "";

for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== " ") {
        word = string[i] + word;
    } else {
        res = res + word + " ";
        word = "";
    }
}
res = res + word;

console.log(res);  