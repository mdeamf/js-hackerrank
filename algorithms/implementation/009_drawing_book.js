function pageCount(n, p) {
    // Half of the amount of the page number = number of sets you need to turn.
    let frontCount = Math.floor(p / 2);

    // The total of sets minus the number of sets from the front = number of sets from the back.
    let backCount = Math.floor(n / 2) - frontCount;

    // Simple return based on that comparison.
    return Math.min(frontCount, backCount);
}