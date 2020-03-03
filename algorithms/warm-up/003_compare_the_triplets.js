function compareTriplets(a, b) {
    // Array to save our points.
    let points = [0, 0];

    // Create a simple loop from 0 to 2.
    for (let i = 0; i < 3; i++) {
        // Sum to the respective item in the points array according to the comparison
        if (a[i] > b[i]) {
            points[0]++;
        } else if (a[i] < b[i]) {
            points[1]++;
        }
    }

    // Return the points array.
    return points;
}