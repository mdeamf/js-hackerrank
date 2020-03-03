function birthday(s, d, m) {
    // Initialize our counter.
    let countSegments = 0;

    // Loop around each integer.
    for(let i = 0; i < s.length; i++) {
        // For each integer, we sum according to the day and month.
        let sumSegments = 0;

        // We consider m + i because we need to go further the same amount each loop.
        for (let j = i; (j < m + i) && (j < s.length); j++) {
            sumSegments += s[j];
        }
        if (sumSegments === d) {
            countSegments++;
        }
    }

    return countSegments;
}