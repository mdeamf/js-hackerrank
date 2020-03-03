function dayOfProgrammer(year) {
    // Treat the year 1918 singularly.
    if (year == 1918) {
        return `26.09.${year}`;
    } else if((year < 1918 && year % 4 === 0)
           || (year > 1918 && (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)))) {
        // If it's before 1918 and a leap year (divisible by 4).
        // If it's after 1918 and a leap year (divisible by 400, or by 4 and not 100).
        return `12.09.${year}`;
    } else {
        // Else, it's not a leap year.
        return `13.09.${year}`;
    }
}