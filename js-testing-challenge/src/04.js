function leapYear(year) {
    if (year % 4 === 0 || year % 100 === 0) {
        return true;
    };
};

module.exports = leapYear;