function repeatLetters(string, num) {
    let array = string.split("")
    let arrayResult = []
    for (i = 0; i < string.length; i++) {
        if (array[i] !== ' ') {
            for (j = 0; j < num; j++) {
                arrayResult.push(array[i])
            }
        } else {
            arrayResult.push(' ');
        };
    };
    return arrayResult.join('');
};


// console.log(repeatLetters('Hello World!', 3))
module.exports = repeatLetters;