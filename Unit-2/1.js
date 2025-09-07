// Math.log2(n)
function power(n){
    if(n<0){
        return false;//edge case anyhting less than 0 will not be power of 2
    }else{
        let value=Math.log2(n)
        return Number.isInteger(value)
    }
}
console.log(power(-10))