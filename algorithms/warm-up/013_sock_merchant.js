function sockMerchant(n, ar) {
    // Create an array with no duplicates and a counter.
    let noDuplicates = [... new Set(ar)];
    let pairCounter = 0;

    noDuplicates.forEach(n => {
        // Loop through each color ID and count it.
        let sockCounter = ar.filter(f => f === n).length;

        // Sum the amount of pairs that were found, rounding it to the lower integer.
        pairCounter += Math.floor(sockCounter / 2);
    });

    return pairCounter;
}