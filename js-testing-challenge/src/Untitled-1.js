function mode(data) {
    let modes = []
    let count = []
    let number = 0
    let maxIndex = 0;

    for (let i = 0; i < data.length; i++) {

        number = data[i];
        count[number] = (count[number] || 0) + 1;
        console.log(count[number])
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count[i] === maxIndex) {
            modes.push(Number(i));
        }
    console.log(maxIndex)
    console.log(modes);
}
mode([10, 2, 38, 23, 38, 23, 21])