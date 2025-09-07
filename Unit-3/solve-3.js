// 💡 Why is it called Sliding Window?
// The idea is:
// Imagine a window of fixed size (k) moving (sliding) over the array.
// At every step, you "look through" this window and calculate something (like sum, max, count, etc.).

// Instead of recalculating from scratch each time (brute force), you reuse previous work by just:

// Adding the next element that enters the window

// Subtracting the first element that exits the window

// That’s why it’s efficient — and the term “sliding” is used because the window moves one step at a time.


// function removeDuplicatesbasic(arr){
//     let result = [];
//     for(let i = 0; i< arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// console.log(removeDuplicatesbasic([1,2, 2, 3, 3, 4]));


// function maxSumm(arr, k){
//     let maxSum = 0;
//     for(let i = 0; i<= arr.length - k; i++){
//         let currentSumm = 0;
//         for(let j = i; j<i+k; j++){
//             currentSumm += arr[j];
//         }
//         maxSum = Math.max(maxSum, currentSumm);
//     }
//     return maxSum;
// }

// console.log(maxSumm([2, 3, 4, 5, 6,7], 6)); //time complexcity O(n * k)


function slidingWindow(arr, k){
    let maxSum = 0;
    let windowSum = 0;
    //step - 1: Define Window n calculate sum of window and assume that is max Sum
    for(let i = 0; i<k; i++){
        windowSum += arr[i];
    }
    maxSum = windowSum;
    for(let i = k; i < arr.length; i++){
        windowSum = windowSum - arr[i - k] + arr[i]
        maxSum = Math.max(maxSum, windowSum)
    }
    return maxSum;
}

console.log(slidingWindow([2, 3, 4, 5, 6], 3))