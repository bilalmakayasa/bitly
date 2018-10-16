function isIsogram(text) {
    let textArray = text.split('')
    let result = true;
    for (let i = 0; i < textArray.length; i++) {
        for (let j = 0 + i; j < textArray.length - 1; j++) {

            if (textArray[i] === textArray[j + 1]) {
                return false
            } else {
                let result = true
            }
        }
    }
    return result
}

module.exports = isIsogram