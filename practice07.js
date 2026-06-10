function hasDuplicate(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const current_number = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[j] === current_number) return true;
        }
    }
    return false;
}

hasDuplicate([1, 2, 3, 4]);