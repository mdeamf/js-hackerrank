function migratoryBirds(arr) {
    // Create a simple object to save our current status.
    let most = {
        id: 0,
        count: 0
    }

    // Remove duplicates into a new array.
    let noDuplicates = [...new Set(arr)];

    // Loop around the new array.
    noDuplicates.forEach(n => {
        // For each item, count the occurences.
        let count = arr.filter(f => f === n).length;
        // If the new quantity is higher than the previous one, override.
        if (count > most.count) {
            most.id = n;
            most.count = count;
        } else if (count === most.count) {
            // If it's equal, compare the IDs - the smallest one is prioritized.
            if (n < most.id) {
                most.id = n;
                most.count = count;
            }
        }
    });

    return most.id;
}