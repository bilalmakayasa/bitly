const readRoot = new Promise((resolve, reject) => {
    for (let i = 1; i <= 3; i++) {
        setTimeout(() => {
            console.log(i)
            resolve()
        }, 1000);
    }

}).then(() =>
    console.log('Done'))