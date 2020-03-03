function diagonalDifference(arr) {
    // Creating a diff array to save our values.
    let diff = [0, 0];

    /**
     * Let's loop through the array and sum diagonally.
     * FROM TOP-LEFT TO BOTTOM-RIGHT
     *      Both indexes have to be equal. Consider this:
     *      1  2  3
     *      4  5  4
     *      3  6  7
     *      
     *      1 is on position [0][0], 5 is on [1][1] and 7 on [2][2].
     * 
     * FROM TOP-RIGHT TO BOTTOM-LEFT
     *      The line index follows the loop.
     *      The column index has to be reversed, starting from the last possible position,
     *      and subtracting 1-by-1 according to the loop.
     *      
     *      3 is on position [0][2], 5 is on [1][1], and 3 is on [2][0].
     */

    // Let's loop through the array.
    for(let i = 0; i < arr.length; i++) {
        // Variables below created for educational purposes.

        // Our value to consider for the Top-Left Bottom-Right diagonal is [i][i].
        let topLeftBottomRight = arr[i][i];
        diff[0] += topLeftBottomRight;

        // Our value to consider for the Top-Left Bottom-Right diagonal is [i][(arr.length - 1) - i].
        // So our column index is the last item, minus the i value of the loop, so we con from the last
        // to the first.
        let topRightBottomLeft = arr[i][arr.length-1-i];
        diff[1] += topRightBottomLeft;
    }

    // Getting the absolute value of the difference.
    return Math.abs(diff[0] - diff[1]);
}