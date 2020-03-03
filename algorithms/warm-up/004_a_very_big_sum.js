// In general, we don't have to worry about the integer data type limit in this case in JS.

function aVeryBigSum(ar) {
    return ar.reduce((p, c) => p + c, 0);
}