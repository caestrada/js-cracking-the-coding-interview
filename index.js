// 1.2 Check Permutation
const { checkPermutation1, checkPermutation2 } = require('./chapter01/1.2/CheckPermutation');
let word1 = 'abc';
let word2 = '123';
console.log(checkPermutation2(word1, word2)); // false

word1 = '123';
word2 = '123';
console.log(checkPermutation2(word1, word2)); // false

word1 = 'abc';
word2 = 'cba';
console.log(checkPermutation2(word1, word2)); // true


// 1.1 Is Unique
// const isUnique = require('./chapter01/1.1/IsUnique')
// const words = ["abc", "abcc", "xyz"]; // true, false true
// words.forEach((word) => {
//     console.log(`Is ${word} unique? ${isUnique(word)}`);
// });