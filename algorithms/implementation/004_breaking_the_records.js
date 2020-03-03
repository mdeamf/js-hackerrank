function breakingRecords(scores) {
    // Initialize our counter variables.
    let highCounter = 0, lowCounter = 0;

    // Initialize our score variables with the first element.
    let highValue = scores[0], lowValue = scores[0];
    scores.forEach(s => {
        // If it's higher, count and update the current highest.
        if (s > highValue) {
            highValue = s;
            highCounter++;
        }

        // Same for lowest.
        if (s < lowValue) {
            lowValue = s;
            lowCounter++;
        }
    })

    return [highCounter, lowCounter];
}