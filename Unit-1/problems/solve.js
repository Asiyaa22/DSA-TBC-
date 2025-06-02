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

console.log(decimalToBinary(8));


