function maxSubarraySum(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[j - num] + arr[j];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}   

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));