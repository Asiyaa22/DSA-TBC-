//1. Prime numbers.
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 2; i <= n; i++) {
    if (isPrime(i)) console.log(i);
}



//2. seive method
function sieveOfEratosthenes(n) {
    let isPrime = new Array(n + 1).fill(true);  // Assume all numbers are prime
    isPrime[0] = false;
    isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            // Mark all multiples of i as not prime
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // Print all primes
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            console.log(i);
        }
    }
}



//3. reverse string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // add characters from end
    }
    return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"

// 🧠 Dry Run for str = "abc":
// i = 2 → 'c'

// i = 1 → 'b'

// i = 0 → 'a'
// ✅ Final = "cba"

//4. check if string is palindrome
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // reverse the string
    }
    return str === reversed; // compare with original
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


// 🧠 Dry Run for "madam":
// Reverse → "madam"

// Compare → same → ✅ palindrome

// 🧠 Dry Run for "hello":
// Reverse → "olleh"

// Compare → not same → ❌ not palindrome

//5. count 1s in binary
function countOnes(n) {
    let count = 0; // to store how many 1s found

    while (n > 0) {
        if (n % 2 === 1) {  // check if last bit is 1
            count++;        // increase count
        }
        n = Math.floor(n / 2); // remove the last bit
    }

    return count; // return total 1s
}

console.log(countOnes(13)); // Output: 3

// 🧠 Dry Run for n = 13
// Binary of 13 = 1101
// Steps:

// 13 % 2 = 1 → count = 1 → n = 6

// 6 % 2 = 0 → count = 1 → n = 3

// 3 % 2 = 1 → count = 2 → n = 1

// 1 % 2 = 1 → count = 3 → n = 0
// ✅ Final answer = 3

//6. swap 2 variables with temp
function swap(a, b) {
    console.log("Before swap:", a, b);

    let temp = a; // store value of a in temp
    a = b;        // assign b to a
    b = temp;     // assign temp (original a) to b

    console.log("After swap:", a, b);
}

swap(5, 9); // Output: 9, 5
// 🧠 Dry Run
// a = 5, b = 9

// temp = 5

// a = 9

// b = 5
// ✅ Done
//7. check is number is a power of 2
function isPowerOfTwo(n) {
    if (n < 1) return false; // negative or 0 can't be powers of 2

    while (n > 1) {
        if (n % 2 !== 0) {
            return false; // if not divisible by 2, not a power of 2
        }
        n = n / 2; // keep dividing by 2
    }

    return true; // if we reach 1, it's a power of 2
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(10)); // false
// 🧠 Dry Run for n = 8
// 8 % 2 = 0 → n = 4

// 4 % 2 = 0 → n = 2

// 2 % 2 = 0 → n = 1
// ✅ Power of 2

//8. check divisibilty of 2 numbers with % without %

function isDivisible(a, b) {
    if (b === 0) return false; // avoid division by 0

    return a % b === 0; // if remainder is 0 → divisible
}

console.log(isDivisible(15, 5));  // true
console.log(isDivisible(17, 5));  // false

// 🧠 Dry Run for a = 15, b = 5:
// 15 % 5 = 0 → ✅ divisible

// 17 % 5 = 2 → ❌ not divisible

//without %

function isDivisible(a, b) {
    if (b === 0) return false; // division by zero check

    let temp = a;

    while (temp >= b) {
        temp = temp - b; // subtract b from a repeatedly
    }

    return temp === 0; // if remainder is 0, divisible
}

console.log(isDivisible(20, 5));  // true
console.log(isDivisible(22, 5));  // false
// 🧠 Dry Run for a = 22, b = 5
// 22 - 5 = 17

// 17 - 5 = 12

// 12 - 5 = 7

// 7 - 5 = 2

// Final remainder = 2 → ❌ not divisible