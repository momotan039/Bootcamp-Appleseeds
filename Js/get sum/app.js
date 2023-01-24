function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
debugger
getSum([1, 2, 3], [5, 66, 23]);

// There are 2 bugs
//1- syntax of function espically
//in the paramters place ,forget to put comma between 2 args
//2- define a sum as constant variable