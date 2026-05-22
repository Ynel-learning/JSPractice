function sumPositive(numArr) {
    let sum = 0;
    for (let i = 0; i < numArr.length; i++) {
        const number = numArr[i];
        if (number > 0) sum += number;
    }
    return sum;
}

sumPositive([-1, -2, -3, 4, 5]);