module.exports = function reverse(n) {
    return reverseUsingString(n);
};

function reverseUsingString(n) {
    return +`${Math.abs(n)}`.split("").reverse().join("");
}

function reverseUsingNumber(n) {
    let result = 0;

    n = Math.abs(n);
    while (n) {
        result = result * 10 + (n % 10);
        n = Math.floor(n / 10);
    }

    return result;
}
