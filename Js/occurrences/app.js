function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n")
// every iteration that occur the condition
// not adding one to it , but assgin same value =>1