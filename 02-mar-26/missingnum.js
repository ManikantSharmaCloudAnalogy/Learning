function findMissingNumbers(arr) {
    arr.sort((a, b) => a - b);
    const missing = [];
    const min = arr[0];
    const max = arr[arr.length - 1];

    for (let i = min; i <= max; i++) {
        if (!arr.includes(i)) {
            missing.push(i);
        }
    }
    return missing;
}
const numbers = [1, 3, 7, 2, 8];
const missingNumbers = findMissingNumbers(numbers);
console.log(missingNumbers); 
