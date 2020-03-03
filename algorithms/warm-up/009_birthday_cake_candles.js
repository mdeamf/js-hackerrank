function birthdayCakeCandles(ar) {
    // Getting the talest candle using Math.max() and the spread operator.
    let tallest = Math.max(...ar);

    // Returning the filtered array's length.
    return ar.filter(f => f === tallest).length;
}