const numbers = [1, -5, 666, 2, 400, 11];



for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        debugger
        if(numbers[i]>numbers[j]){
            const temp=numbers[i]
            numbers[i]=numbers[j]
            numbers[j]=temp
        }
    }
}

console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if(numbers[i]<numbers[j]){
            const temp=numbers[i]
            numbers[i]=numbers[j]
            numbers[j]=temp
        }
    }
}

console.log(numbers)

