const isPrime = num => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    let sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) if (!(num % i)) return false;
    return true;
};

const oddNotPrime = n => {
    let count = 0;

    for (let i = n; i > 0; i--) if (i % 2 && !isPrime(i)) count++;

    return count;
};

oddNotPrime(10);
