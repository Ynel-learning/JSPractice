function reverseString(word) {
    let reversed_string = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed_string += word[i];
    }
    return reversed_string;
}

reverseString('hello');