function censor(text, censoredWords, censorSymbol) {
    let textArr = text.split(' ')
    let res = 0;
    let result = 0
    let testArray = []


    // console.log(textArr);
    // console.log(textArr.length)
    // console.log(censoredWords.length);
    // console.log(censorSymbol)
    ;

    for (let i = 0; i < textArr.length; i++) {
        for (let j = 0; j < censoredWords.length; j++) {
            if (textArr[i] === censoredWords[j]) {
                let temp = []
                if (censorSymbol) {
                    for (let k = 0; k <= censoredWords[j].length - 1; k++) {
                        temp.push(censorSymbol)
                    }
                } else {
                    for (let l = 0; l <= censoredWords[j].length - 1; l++) {
                        temp.push('#')
                    }
                }
                res = temp.join('')
                let pattern = RegExp(censoredWords[j], 'g')
                let result = text.replace(pattern, res)
                text = result
                testArray.push(result)

            }

        }


    }

    return testArray[testArray.length - 1];

}

module.exports = censor