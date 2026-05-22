function findLargest(arrNum) {
    let largest = arrNum[0];
    for (let i = 1; i < arrNum.length; i++) {
        const number = arrNum[i];

        if (number > largest) largest = number;
    }return largest;
}

findLargest([3, 7, 2, 9, 5]);