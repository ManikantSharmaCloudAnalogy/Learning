//create set using new set()
const letters=new Set(["a","b","c"]);
console.log(letters);

const c="d";
const e="f";
letters.add(c);
letters.add(e);
console.log("adding set elements");
console.log(letters);