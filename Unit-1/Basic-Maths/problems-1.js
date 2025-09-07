//Print all Divisiors
//first think then code

// function printAllDivisors(n){
//     let divisors = "";
//     for(let i = 0; i<=n ; i++){
//       if(n%i==0){
//         divisors += i + " ";
//       }
//     }
//     console.log(`Divisors: ${divisors}`)
// }

// printAllDivisors(36);

//check if number is prime
//brute-force approach
// function checkPrime(n){
//    let count = 0;
//    for(let i = 0; i<=Math.sqrt(n); i++){
//        if(n%i == 0){
//         count++
//        }
//    }
//    if(count == 2){
//     console.log("isprime")
//    }else{
//     console.log("!prime")
//    }
// }

// checkPrime(2);


//Extraction of digits
// function extractDigits(n){
//     while(n > 0){
//         let digit = n % 10;
//         console.log(digit)
//         n = Math.floor(n / 10);
//     }
// }

// Extract String characters

//Greatest Common Divisor

// function gcd(n1, n2){
//     let result = 1;
//     for(let i = 0; i<=n1; i++){
//         if((n1 % i == 0) && (n2 % i == 0)){
//             result = i;
//         }
//     }
//     console.log("GCD is", result);
// }

// gcd(20, 40);

//min function here