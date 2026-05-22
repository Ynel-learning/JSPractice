function countVowels(word) {
    const vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        if (vowels.includes(letter)) count++;
    }
    return count;
}
countVowels('hello');