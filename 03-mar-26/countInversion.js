function  countInversion(arr){
    let count = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                count++;
            }
        }
    }
    return count;
};
const array = [1, 5, 4, 3];
console.log(countInversion(array));