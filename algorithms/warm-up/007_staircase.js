function staircase(n) {
    // Looping through our steps.
    for (let i = 1; i <= n; i++) {
        // Initializing our variable.
        let step = '';

        // Populating our step with the amount of # needed.
        for (let j = 1; j <= i; j++) {
            step += '#';
        }

        // Logging with padStart(), adding empty spaces to the left if the string's length is lesser than n.
        console.log(step.padStart(n, ' '));
    }
}