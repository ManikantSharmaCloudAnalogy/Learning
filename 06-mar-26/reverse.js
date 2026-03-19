let str = "i love my india";
    let reverse= "";
    let word = "";
    for (let i = 0; i <= str.length; i++) {
          let ch=str[i];
        if (i === str.length || ch === " ") {
            for (let j = word.length - 1; j >= 0; j--) {
                reverse=reverse+word[j];
            }  
            if (i !== str.length) {
                reverse += " ";
            }
            word = "";
        } else {
            word = word+ch;
        }
    }
console.log(reverse)
