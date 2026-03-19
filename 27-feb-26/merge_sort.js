function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var arr1 = mergeSort(arr.slice(0, mid));
    var arr2 = mergeSort(arr.slice(mid));

    return merge(arr1, arr2);
}

function merge(arr1, arr2) {
    var result = [];
    var i = 0;
    var j = 0;

    // Merge using while loops
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result[result.length] = arr1[i];
            i++;
        } else {
            result[result.length] = arr2[j];
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        result[result.length] = arr1[i];
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        result[result.length] = arr2[j];
        j++;
    }

    return result;
}

// Example usage
var arr = [38, 27, 43, 3, 9, 82, 10];
var sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);