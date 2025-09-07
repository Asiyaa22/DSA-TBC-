//Two-pointers Technique

//two pointer technique is an algorithm that invovles using
//two pointers(two indices/reference) to traverse on an array
//or linear data structure.
//this technique is commonly employed to solve problems efficiently
//often reducing time cpomplexity compared to brute-force approach


//this approach will only work on sorted arrays!!!

//given a sorted array
//of numbers, can we check if any two numbers adds up to a target

//[1, 2, 3, 4, 5, 6]

//target = 11

// function twoSumBasic(arr, target){
//     for(let i = 0; i<arr.length; i++){
//         for(let j = i + 1; j<arr.length; j++){
//             if(arr[i] + arr[j] == target){
//                 return true;
//             }else{
//                 return false;
//             }
//         }
//     }
// }

// console.log(twoSumBasic([1, 2, 3,5, 6], 11));



// function twoSum(arr, target){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum == target){
//             return true
//         }else if(sum < target) {
//             left++;
//         }else{
//             right--;
//         }
//     }
// }

// console.log(twoSum([1, 2, 3, 4, 5 , 6], 11))



//reverse an array

// function reverseArray(arr){
//     let result = [];
//     for(let i = arr.length-1; i>=0; i--){
//        result.push(arr[i]);
//     }
//     return result;
// }

// console.log(reverseArray([1,2, 3, 4, 5]))

// function reverseArray(arr){
//     let left = 0;
//     let right = arr.length - 1;
//     while(left < right){
//         //swap them bro
//         let temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;
//         left++;
//         right--;
//     }
//     return arr;
// }

// console.log(reverseArray([1,2 ,3 ,5 , 6, 7, 8]))


// function removeDuplicates(arr){
//     let result = [];
//     for(let i = 0; i<arr.length; i++){
//         if(!result.includes(arr[i])){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }



function removeDuplicates(arr){
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }
    return arr.slice(0, i + 1);
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4]))

