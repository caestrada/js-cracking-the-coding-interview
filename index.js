const isUnique = require('./chapter01/IsUnique')


const words = ["abc", "abcc", "xyz"]; // true, false true
words.forEach((word) => {
    console.log('IsUnique?', isUnique(word));
})