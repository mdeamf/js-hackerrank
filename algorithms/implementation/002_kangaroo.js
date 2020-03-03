function kangaroo(x1, v1, x2, v2) {
    // Since x2 is always > x1, if v2 is >= v1, then they'll never meet each other.
    if (v2 >= v1) {
        return 'NO';
    } else {
        /**
         * Let's consider the following problem:
         * Both kangoroo's position + (their speed * an unknown amount of steps) needs to be equal.
         * If we find this unknown amount of steps, we can accurately predict if they'll meet.
         * Therefore, we have this equation:
         * 
         * x1 + (y * v1) = x2 + (y * v2)
         * (x1 - x2) + (y * v1) = (y * v2)
         * (x1 - x2) = (y * v2) - (y * v1)
         * (x1 - x2) = y(v2 - v1)
         * y = (x1 - x2) / (v2 - v1)
         * 
         * Programatically, we only need the division remainder.
         * The division result is the amount of steps, but if it's invalid, it will not be an integer.
         * Therefore, the remainder helps us in identifying if it's an integer amount of steps.
         */
        if ((x1 - x2) % (v2 - v1) === 0) {
            return 'YES';
        } else {
            return 'NO';
        }
    }
}