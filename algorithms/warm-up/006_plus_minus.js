function plusMinus(arr) {
    // Function to fix the amount of decimals of our numbers.
    const fix = (number, decimals) => {
        return parseFloat(number.toFixed(decimals));
    }

    // Our counters for each type (positive, negative and zero).
    let pos = 0, neg = 0, zer = 0;

    // Looping and adding the proper values according to their type.
    arr.forEach(a => {
        if (a < 0) {
            neg++;
        } else if (a > 0) {
            pos++;
        } else {
            zer++;
        }

    });

    // Logging each proportion/fraction, with 6 fixed decimals maximum.
    console.log(fix(pos / arr.length, 6));
    console.log(fix(neg / arr.length, 6));
    console.log(fix(zer / arr.length, 6));
}