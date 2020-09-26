const isUnique = require('./chapter01/1.1/IsUnique')


const words = ["abc", "abcc", "xyz"]; // true, false true
words.forEach((word) => {
    console.log(`Is ${word} unique? ${isUnique(word)}`);
});