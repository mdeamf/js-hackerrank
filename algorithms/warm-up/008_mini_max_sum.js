function miniMaxSum(arr) {
    // Getting the full sum.
    let sum = arr.reduce((p, c) => p + c, 0);

    // Subtracting with the maximum and minimum using template literals and the spread operator.
    console.log(`${sum - Math.max(...arr)} ${sum - Math.min(...arr)}`);
}