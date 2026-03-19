/*
"Every part (or letter, in this case) of the elastic will expand, with the minimum expansion at the ends, and the maximum expansion in the center.
If the word has an odd length, the effective central character of the word will be the pivot that splits the word into two halves.
Ex:
""ABC"" -> Left = ""A"" | Center = ""B"" | Right = ""C""

If the word has an even length, you will consider two parts of equal length, with the last character of the left half and the first character of the right half being the center.
Ex:
""ABCD"" -> Left = ""AB"" | Right = ""CD""

You will represent the expansion of a letter repeating it as many times as its numeric position (so counting the indexes from/to 1, and not from 0 as usual) in its half, with a crescent order in the left half and a decrescent order in the right half.
Ex:
Word = ""ANNA"" 

Left = ""AN""
Right = ""NA""

Left = ""A"" * 1 + ""N"" * 2 = ""ANN""
Right = ""N"" * 2 + ""A"" * 1 = ""NNA""

Word = Left + Right = ""ANNNNA""

If the word has an odd length, the pivot (the central character) will be the peak (as to say, the highest value) that delimits the two halves of the word.
Ex:
Word = ""KAYAK""

Left = ""K"" * 1 + ""A"" * 2 = ""KAA""
Pivot = ""Y"" * 3 = ""YYY""
Right = ""A"" * 2 + ""K"" * 1 = ""AAK""

Word = Left + Pivot + Right = ""KAAYYYAAK""

Given a word, implement a function that returns the elasticized version of the word as a string.

Examples:
elasticize(""ANNA"") ➞ ""ANNNNA""

elasticize(""KAYAK"") ➞ ""KAAYYYAAK""

elasticize(""X"") ➞ ""X""

Note:
For words with less than three characters, the function must return the same word (no traction applicable).
Remember, into the left part characters are counted from 1 to the end, and, in reverse order until 1 is reached, into the right."

*/

function elasticize(word) {
  let n = word.length;

  // Rule 1: length < 3
  if (n < 3) return word;

  let result = "";

  // EVEN length
  if (n % 2 === 0) {
    let half = n / 2;
    let left = word.slice(0, half);
    let right = word.slice(half);

    // Left expansion (increasing)
    for (let i = 0; i < left.length; i++) {
      result += left[i].repeat(i + 1);
    }

    // Right expansion (decreasing)
    for (let i = 0; i < right.length; i++) {
      result += right[i].repeat(right.length - i);
    }

  } 
  // ODD length
  else {
    let mid = Math.floor(n / 2);
    let left = word.slice(0, mid);
    let pivot = word[mid];
    let right = word.slice(mid + 1);

    // Left expansion
    for (let i = 0; i < left.length; i++) {
      result += left[i].repeat(i + 1);
    }

    // Pivot expansion
    result += pivot.repeat(mid + 1);

    // Right expansion
    for (let i = 0; i < right.length; i++) {
      result += right[i].repeat(right.length - i);
    }
  }

  return result;
}
console.log(elasticize("KAYAK"));