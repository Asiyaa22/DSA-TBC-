function isPowerOfTwo(n) {
    if (n < 1) return false; // negative or 0 can't be powers of 2

    while (n > 1) {
        if (n % 2 !== 0) {
            return false; // if n is not divisible by 2 at any point, it's not power of 2
        }
        n = n / 2; // keep dividing by 2
    }

    return true; // if we reach 1, it's a power of 2
}

console.log(isPowerOfTwo(8));  // true
console.log(isPowerOfTwo(10)); // false