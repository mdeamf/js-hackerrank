function getTotalX(a, b) {
    function maximumCommonDivisor(num1, num2) {
      // Initializing our remainder as 1.
      let remainder = 1;

      // If it reaches 0, we found our MDC.
      while (remainder != 0) {
        // The remainder has to be obtained between a and b.
        remainder = num1 % num2;

        // We save num2 in num1 for the next comparison.
        num1 = num2;

        // We save the remainder in num2 for the next comparison.
        num2 = remainder;

        // We do this because we're following the Euclidean algorithm.
      }

      // Return the MCD here.
      return num1;
    }

    function leastCommonMultiple(num1, num2) {
      // Simple logic: num1 times num2, divided by their MCD, is the LCM.
      return (num1 * num2) / maximumCommonDivisor(num1, num2);
    }

    // Let's sort our array for lexical purposes.
    a = a.sort((m, n) => m - n);

    // Create a variable to save our minimum factor.
    let minFactor = 1;
    a.forEach(number => {
        // Let's get the LCM of each number, taking the minFactor as the second number.
        // The minFactor variable will be constantly updated.
        minFactor = leastCommonMultiple(number, minFactor);
    });

    // Let's initialize our maxFactor variable.
    let maxFactor = 0;
    let maxFactorCounter = 0;

    // Let's loop until we reach the highest possible number.
    while (maxFactor <= Math.max(...b)) {
        // Our next maxFactor is the maxFactor plus minFactor.
        maxFactor = maxFactor + minFactor;

        // We use this variable to check if it's divisible by every number.
        let divisible = true;

        // Checking the modulo in each number.
        b.forEach(number => {
            // If the modulo is different than 0, divisible is false, and we don't count it.
            if (number % maxFactor !== 0) {
                divisible = false;
            }
        });

        // If everything is divisible by it, count it.
        if (divisible) {
            maxFactorCounter++;
        }
    }
    return maxFactorCounter;
}