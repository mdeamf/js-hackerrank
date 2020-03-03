function timeConversion(s) {
    // Getting the AM/PM notation.
    let ampm = s.substring(8, 10);

    // Splitting the time into a string array.
    let time = s.split(':');

    if (ampm === 'AM') {
        // If it's AM, transform 12 into 00.
        if (time[0] === '12') {
            time[0] = '00';
        }

    } else {
        // If it's PM, sum 12 to every hour, except 12.
        if (time[0] !== '12') {
            time[0] = (parseFloat(time[0]) + 12).toString();
        }
    }

    // Returning the converted time. Ignoring the AM/PM notation.
    return `${time[0]}:${time[1]}:${time[2].substring(0, 2)}`
}