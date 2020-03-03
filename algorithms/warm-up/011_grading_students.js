function gradingStudents(grades) {
    // Map the values into a new array with rounded grades.
    let roundedGrades = grades.map(g => {
        // If it's more than 38, round it - else, just return the same value.
        if (g >= 38) {
            // Get the next multiple of 5.
            let next = Math.ceil(g / 5) * 5;

            // If the difference is less than 3, round it - else, just return the same value.
            if (next - g < 3) {
                return next;
            } else {
                return g;
            }
        } else {
            return g;
        }
    });

    // Return the new array.
    return roundedGrades;
}