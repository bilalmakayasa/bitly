function stats(data) {
    const sorted = data.sort((a, b) => a > b)

    function mean(data) {
        const len = data.length
        const sum = data.reduce((accum, current) => accum + current)
        return sum / len
    }

    function median(data) {
        const len = data.length
        const result = sorted[parseInt(len / 2)]
        return result
    }

    function range(data) {
        const len = data.length
        const result = sorted[sorted.length - 1] - sorted[0]
        return result
    }

    function mode(data) {
        let modes = []
        let count = []
        let number = 0
        let maxIndex = 0;

        for (let i = 0; i < data.length; i++) {

            number = data[i];
            count[number] = (count[number] || 0) + 1;
            if (count[number] > maxIndex) {
                maxIndex = count[number];
            }
        }

        for (i in count)
            if (count[i] === maxIndex) {
                modes.push(Number(i));
            }

        if (modes.length > 1) {
            return (`${modes[0]}, ${modes[1]}, each appeared ${maxIndex} times`)
        } else {
            return (`${modes[0]} appeared ${maxIndex} times`)
        }
    }


    function largest(sorted) {
        const result = sorted[sorted.length - 1]
        return result
    }

    function smallest(sorted) {
        const result = sorted[0]
        return result
    }

    function sum(data) {
        const result = data.reduce((accum, current) => accum + current)
        return result
    }

    function count(data) {
        const index = data.length
        return index
    }
    return ({
        "mean": mean(data),
        "median": median(data),
        "range": range(data),
        "mode": mode(data),
        "largest": largest(sorted),
        "smallest": smallest(sorted),
        "sum": sum(data),
        "count": count(data)


    })
}
module.exports = stats