// Start looping from with a varable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// Return the sorted array

// function bubbleSort(arr) {
//     for (var i = arr.length; i > 0; i--) {
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j+1]);
//             if (arr[j] > arr[j+1]) {
//                 //SWAP!
//                 var temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);


// Optimized with noSwaps
function bubbleSort1(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                //SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort1([8, 1, 2, 3, 4, 5, 6, 7]);