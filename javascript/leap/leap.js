function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return true;
        } else {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}

<<<<<<< HEAD
export default isLeap;
// This problem is solved
=======
export default isLeap;
>>>>>>> 493265663f747641b23bea2e310df3e77a017959
