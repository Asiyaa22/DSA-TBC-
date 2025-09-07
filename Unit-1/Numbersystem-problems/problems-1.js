function binaryToDecimal(binary){
    let decimal = 0;
    for(let i = 0; i < binary.length; i ++){
        let digit = Number(binary[binary.length - 1 - i]);
        decimal += digit * (2**i);
    }
    return decimal
}

// console.log(binaryToDecimal("1011"));




function octalToDecimal(octal) {
    let decimal = 0;
    for (let i = 0; i < octal.length; i++) {
        let digit = Number(octal[octal.length - 1 - i]);
        decimal += digit * (8 ** i);
    }
    return decimal;
}

// console.log(octalToDecimal("725")); // Output: 469

// In JavaScript, the Number() function is used to convert a value into a number (specifically, a number data type).

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

// In JavaScript, indexOf() is a method used to find the position (index) of the first occurrence of a specified value within a string or an array.

