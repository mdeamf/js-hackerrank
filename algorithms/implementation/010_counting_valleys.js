function countingValleys(n, s) {
    // Create variables to verify our current position, and a valley counter.
    let status = 0, valley = 0;

    // Loop through all the steps.
    for(let i = 0; i < n; i++) {
        // Save the previous status for comparison.
        let previous = status;

        // Sum or subtract according to the string.
        if (s[i] === 'U') {
            status++;
        } else {
            status--;
        }

        // If we took a step down and the previous position was 0, it means we entered a valley.
        if (status < 0 && previous === 0) {
            valley++;
        }
    }

    return valley;
}