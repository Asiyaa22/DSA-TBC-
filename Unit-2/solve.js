//print all factors

// function printAllDivisors(n){
//     for(let i = 1; i <= Math.sqrt(n) ; i++){
//         if(n % i == 0){
//             console.log(i);
//          //only the first factor found
//         if(i != n / i){
//             console.log(n / i);//paired divisor
//         }
//     }
//     }
// }

// printAllDivisors(36);

//Time complexity is Big O (square root of n)


//print all prime numbers from 1 to n
// function isPrime(num){
//     if(num < 2 ) return false;
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true;
// }
// function printAllPrime(n){
//     for(let i = 1; i <= n; i++){
//         if(isPrime(i)){
//             console.log(i);
//         }
//     }
// }

// printAllPrime(24);


// function isPrime(num){
//     if(num < 2) return false
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true
// }

// function printAllPrime(n){
//     for(let i = 2; i <= n; i++){
//         if(isPrime(i)){
//             console.log(i);
//         }
//     }
// }

// printAllPrime(20);


//seive of Eratosthenes

// function printAllPrimes(n){
//     let isPrime = new Array(n+1).fill(true);
//     //creating an array n assuming all values as true
//     isPrime[0] = false;
//     isPrime[1] = false;
//     // console.log(isPrime);
//     for(let i = 2; i*i <= n; i++){
//         //mark all the multiples as false
//         for(j = i * i; j <= n; j+=i){
//             isPrime[j] = false;
//         }
//     }
//     for(let i = 2; i <= n; i++){
//         if(isPrime(i)){
//             console.log(i);
//         }
//     }
// }

// printAllPrimes(20);


// function gcd(a, b){
//     while(b != 0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// console.log(gcd(12, 9));

let arr = [2, 3, 3, 4, 6, 5, 5, 6, 4]
function findUnique(arr){
    let unique = 0;
    for(let num of arr){
        unique ^= num;
    }
    return unique;
}

console.log(findUnique(arr));
