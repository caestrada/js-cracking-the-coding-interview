const isUnique = (word) => {
    let cache = {};
    for (let i = 0; i < word.length; i++) {
        const character = word[i];

        if (cache[character]) {
            return false;
        }

        cache[character] = true;
    }

    return true;
}

module.exports = isUnique;