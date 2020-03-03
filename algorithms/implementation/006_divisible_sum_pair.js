function divisibleSumPairs(n, k, ar) {
    var divisibleCounter = 0;
    
    // Loop on each item, and for each item, do a permutation.
    for (let i = 0; i < n; i++) {
        let firstPair = ar[i];

        // Start the loop on the next item.
        // That way, we won't repeat the same permutations, or permute with the same item.
        for (let j = (i + 1); j < n; j++) {
            let secondPair = ar[j];

            // If the sum of the pair is divisible by k, count it.
            if ((firstPair + secondPair) % k === 0) {
                divisibleCounter++;
            }
        }
    }

    return divisibleCounter;
}