const users = [
    {firstName : "Asiya", lastName: "farhath", age: 22},
    {firstName : "T", lastName: "Gayathri", age: 26},
    {firstName : "G", lastName: "Naresh", age: 22},
    {firstName : "Laxmi", lastName: "zoro", age: 40},
]
//find how many users are of particular age

// output { 22: 2, 26: 1,  40: 1}

const result = users.reduce(function(acc, curr){
   if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age]
   }else{
    acc[curr.age] = 1;
   }
   return acc
}, {})


// const result = users.map(function(x) {
//     x = x.firstName + " " + x.lastName;
//     return x;
// })
console.log(result);

//output [fullname of users]
// Map, filter, reduce 
// which function we can use to get full name of each user

//findhow many users are of particular age
// output must be { 22: 1, 26:1, 32:1, 40:1}

// const result = users.reduce(function(acc, curr){
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {})


// For each user:

// Check if acc already has a property for curr.age

// If yes, increment the count

// If no, set the count to 1

// console.log(result);

//output [Asiya, Ayesha]
// const output = users.reduce(function (acc, curr){
//     if(curr.age < 30){
        // acc.name = curr.firstName;
//         acc.push(curr.firstName)
//     }
//     return acc
// }, [])

// console.log(output);

//this code will do what see

// then replace line no. 10 with this code acc.push(curr.firstName)


// const arr = [1, 2, 3, 4, 10, 16];
// function double(x){
//  x = x*2
//  return x;
// }

// const result = arr.map( double )

// console.log(result)

// function findTotal(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum;
// }

// console.log("I am coming from traditional methiod", findTotal(arr));

// const result = arr.reduce(function(acc, curr){
//    acc = acc + curr;
//    return acc;
// }, 0);

// console.log("I am coming form reduce", result)


// function findMax(arr){
//     let max = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(findMax(arr));