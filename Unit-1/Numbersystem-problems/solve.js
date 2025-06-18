// write a program to convert a decimal to Binary

//sshhhh code begins, tap in to dev mode first notes then code.....yo!🚀

function decimalToBinary(n){
    let binary = "";
    while(n > 0){
        let remainder = n % 2;
        binary = remainder + binary;
        n = Math.floor(n/2);
    }
    return binary;
}

console.log(decimalToBinary(14));

//Program to convert binary into decimal

function binaryToDecimal(binary){
    let decimal = 0;
    for(let i = 0; i < binary.length; i++){
        let digit = Number(binary[binary.length - 1 - i]);
        decimal += digit * (2 ** i);
    }
    return decimal;
}

console.log(binaryToDecimal("1110"));

//🗒 Note: In JavaScript, the Number() function is used to convert a value into a number (specifically, a number data type).

//program to convert octal to decimal
function octalToDecimal(octalNum){
    let decimal = 0;
    for(let i = 0; i<octalNum.length; i++){
        let digit = Number(octalNum[octalNum.length - 1 - i]);
        decimal += digit * (8**i); 
    }
    return decimal;
}

console.log(octalToDecimal("440"));


//Program to convert Hexadecimal to decimal
function hexToDecimal(hex) {
    let decimal = 0;
    const hexDigits = "0123456789ABCDEF";
    hex = hex.toUpperCase();

    for (let i = 0; i < hex.length; i++) {
        let digit = hex[hex.length - 1 - i];
        let value = hexDigits.indexOf(digit);
        decimal += value * (16 ** i);
    }
    return decimal;
}

console.log(hexToDecimal("2F6")); // Output: 52890
//🗒Note: In JavaScript, indexOf() is a method used to find the position (index) of the first occurrence of a specified value within a string or an array.
