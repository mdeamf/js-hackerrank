function bonAppetit(bill, k, b) {
    // Reduce our array to the expected sum.
    let sumEqual = bill.reduce((acc, cur, ind) => {
        // If the index is the item that Anna didn't eat, just return the accumulated result.
        if (ind !== k) {
            return acc + cur;
        } else {
            return acc;
        }
    }, 0)

    if (sumEqual / 2 === b) {
        // If the expected value is equal to Brian's value, it's ok.
        console.log('Bon Appetit');
    } else {
        // Else, we show the remainder.
        console.log(b % (sumEqual / 2));
    }
}