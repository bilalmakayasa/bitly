function repeatString(string, num) {
    let array = [];
    for (i = 0; i < num; i++) {
        array.push(string);
    };
    return array.join(" ")
};

module.exports = repeatString;