const checkPermutation1 = (word1, word2) => {
    if (word1.length != word2.length || word1 === word2)
        return false;

    const cache = {};
    for (let i = 0; i < word1.length; i++) {
        const c1 = word1[i];
        const c2 = word2[i];

        cache[c1] = (!!cache[c1]) ? ++cache[c1] : 1;
        cache[c2] = (!!cache[c2]) ? --cache[c2] : -1;
    }

    for (key in cache) {
        if (cache[key] != 0)
            return false;
    }

    return true;
}

const checkPermutation2 = (word1, word2) => {
    if (word1.length !== word2.length || word1 === word2)
        return false;

    word1 = [...word1].sort().join('');
    word2 = [...word2].sort().join('');

    return word1 === word2;
}

module.exports = {
    checkPermutation1,
    checkPermutation2,
};