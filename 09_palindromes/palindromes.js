const palindromes = function (string) {
    const re = /[\W]/g;
    const lowOriginal = string.toLowerCase().replace(re, '');
    const lowReversed = lowOriginal.split('').reverse().join('');
    return lowReversed === lowOriginal;
}
// Do not edit below this line
module.exports = palindromes;
