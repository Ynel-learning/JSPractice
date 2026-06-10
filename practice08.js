function countCharacters(word) {
    const character_count = {};
    for (let i = 0; i < word.length; i++) {
        if (word[i] in character_count) character_count[word[i]]++;
        else character_count[word[i]] = 1;
    }
    return character_count;
}

countCharacters('hello');