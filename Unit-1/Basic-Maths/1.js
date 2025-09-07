// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// console.log(isPrime(4));


// function extractChars(str){
//     for(let i = 0; i<str.length; i++){
//         let char = str[i];
//         console.log(char);
//     }
// }

// extractChars("Barabari")

function countDigits(n){
    let count = 0;
    while(n > 0){
        let digit = n % 10;
        count++;
        n = Math.floor(n / 10);
    }
    console.log(count);
}
countDigits(347);