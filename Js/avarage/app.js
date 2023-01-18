function calcAverage(arr) {
    var sum=0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
debugger
calcAverage([85, 90, 92]);
console.log(calcAverage([85, 90, 92]));
// didint initalize the sum variable
// forget to devide by the length of array before return it