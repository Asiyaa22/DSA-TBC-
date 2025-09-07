
function gcd(a, b){
    while(b != 0){
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log(gcd(9, 12));

function countEvenOdd(n){
    let countEven = 0;
    let countOdd = 0;
    let str = n.toString();
    for(let i = 1; i<=str.length; i++){
        if(i % 2 == 0){
            countEven++;
        }else{
            countOdd++
        }
    }
    return `Even: ${countEven}, odd: ${countOdd}`
}

// console.log(countEvenOdd(123487));