function productExceptSelf(arr) {
    let n = arr.length;
    let res= new Array(n).fill(1);

    // Compute product of all elements except arr[i]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                res[i] *= arr[j];
            }
        }
    }

    return res;
}

// Driver code
let arr = [10, 3, 5, 6, 2];
let res = productExceptSelf(arr);
console.log(res.join(" "));