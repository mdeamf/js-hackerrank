function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Function the sums and compares the fruits to the house.
    const sumFruit = (origin, fruits) => {
        var sum = 0;

        // Loop through each fruit and analyze its X-position.
        fruits.forEach(fruit => {
            // The position has to consider the origin + the movement.
            let pos = origin + fruit;

            // If it's within range, sum.
            if (pos >= s && pos <= t) {
                sum++;
            }
        });

        return sum;
    }

    // Run the function for each fruit.
    console.log(sumFruit(a, apples));
    console.log(sumFruit(b, oranges));
}