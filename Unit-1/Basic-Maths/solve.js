//1. Print All divisors

function printAllDivisors(n){
    let divisors = " "
    for(let i = 1; i<= n; i++){
        if(n % i == 0){
            divisors += i + " ";
            console.log(i);
        }
    }
    console.log(divisors);
}
printAllDivisors(12);

// 1 2 3 4 6 12

// 2. print only odd divisors / even divisors 

//code


//3. check if number is Prime

function checkPrime(n){
    let count = 0;
    for(let i = 0; i <= n; i++){
        if(n % i == 0){
            count++;
        }
    }
    if(count == 2){
        console.log("isPrime");
    }else{
        console.log("!prime");
    }
}
checkPrime(24);
//output:!prime

//4. Extraction of digits

//4.0 code
function extractDigits(n){
    while(n>0){
        let digits = n % 10; //remainder so that is the extracted digit
        console.log(digits);// printing the extracted digit
        n = Math.floor(n / 10);
    }
}
extractDigits(1233)
//output
//3
//3
//2
//1

//4.1 code note: There is a difference between code of 4.0 and 4.1 analyse that carefully
// extract digits from left to right
function extractDigits(n){
    let str = n.toString();
    for(let i = 0; i<str.length; i++){
        let digit = str[i];
        console.log(digit);
    }
}

extractDigits(1234);
//output
//1
//2
//3
//4

//4.2 Extract char from strings
function extractChars(str){
    for(let i = 0; i<str.length; i++){
        let char = str[i];
        console.log(char);
    }
}

extractChars("Barabari")
//Output:
// B
// a
// r
// a
// b
// a
// r
// i
//5.count no. of digits
function countDigits(n){
    let count = 0;
    while(n > 0){
        let digit = n % 10;
        count++;
        n = Math.floor(n / 10);
    }
    console.log(count);
}
countDigits(1224);
//output: 4

//6. count characters in string

function countChar(str){
    let count = 0;
    for(let i = 0; i<str.length; i++){
        let char = str[i];
        count++;
    }
    console.log(count);
}
countChar("Barabari");
//output: 8


//6. Reverse a number

function reverseNum(n){
    let reversedNumber = 0;
    while(n>0){
        let digit = n % 10;//extarcting last digit
        n = Math.floor(n/10);//reducing the number
        reversedNumber = (reversedNumber * 10) + digit;
    }
    console.log(reversedNumber);
}

reverseNum(1009);
//output: 9001

//7. Check if no. is palinderome
function checkPalindrome(n){
    let reversedNumber = 0;
    while(n>0){
        let digit = n % 10;
        n = Math.floor(n / 10);
        reversedNumber = (reversedNumber * 10) + digit;
    }
    if(n == reversedNumber){
        console.log("isPalindrome")
    }else{
        console.log("!palindrome");
    }
}

checkPalindrome(25); //"!palindrome"

//8. reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // add characters from end
    }
    return reversed;
}

console.log(reverseString("hello")); 
// Output: "olleh"

// 🧠 Dry Run for str = "abc":
// i = 2 → 'c'

// i = 1 → 'b'

// i = 0 → 'a'
// ✅ Final = "cba"

//9. check if string is palindrome?

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


