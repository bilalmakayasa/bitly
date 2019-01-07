function randomize(){
let text = ""
let possibility = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
for (let i = 0; i < 5; i++)
text += possibility.charAt(Math.floor(Math.random() * possibility.length));
return text;
}

module.exports = randomize