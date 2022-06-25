module.exports = function reverse (n) {
    return Math.abs(String(Math.abs(n)).split("").reverse().join(""));
}
