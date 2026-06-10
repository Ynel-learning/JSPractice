const mostFrequentChar = (word) => {
    const charCount = {};
    for (let i = 0; i < word.length; i++) {
        if (word[i] in charCount) charCount[word[i]]++;
        else charCount[word[i]] = 1;
    }

    let largestNumber = charCount[word[0]];
    let mostFrequent = charCount[word[0]];
    for (const key in charCount) {
        if (charCount[key] > largestNumber) {
            largestNumber = charCount[key];
            mostFrequent = key;
        }
    }
    return mostFrequent;
}

mostFrequentChar('aaabb');