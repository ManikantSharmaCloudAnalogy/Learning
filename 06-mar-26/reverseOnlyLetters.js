function reverseOnlyLetters(s) {
    let arr = s.split(''); // convert string to array
    let i = 0, j = arr.length - 1;

    function isLetter(c) {
        return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z');
    }

    while (i < j) {
        if (!isLetter(arr[i])) {
            i++;
        } else if (!isLetter(arr[j])) {
            j--;
        } else {
            // swap letters
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }

    // convert array back to string
    let result = '';
    for (let k = 0; k < arr.length; k++) {
        result += arr[k];
    }
    return result;
}

// Example usage:
console.log(reverseOnlyLetters("a-bC-dEf-ghIj")); // "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters("Test123!"));      // "tseT123!"