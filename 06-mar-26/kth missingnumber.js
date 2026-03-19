function findKthMissing(arr, k) {
    let missingCount = 0;
    let num = 1;

    while (true) {
        if (!arr.includes(num)) {  // if num is missing in array
            missingCount++;
            if (missingCount === k) {
                return num;  // found the k-th missing number
            }
        }
        num++;
    }
}

// Example:
const arr = [2, 3, 4, 7, 11];
const k = 5;
console.log(findKthMissing(arr, k)); // Output: 9