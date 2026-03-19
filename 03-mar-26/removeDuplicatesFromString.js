function removeDuplicate(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (str[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result += str[i];
    }
  }

  return result;
}
let str = "hello world";
console.log(removeDuplicate(str));