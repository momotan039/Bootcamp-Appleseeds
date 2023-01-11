user = {
    name: 'mohammed',
    age: 22,
    job: 'developer'
}
let arr = Array(100).fill(Object.assign({},user), 0, 100)

// make range by array
let nums = Array.from(Array(100), (x, i) => i + 1)
// make range by repeat
let nums2 = Array.from(" ".repeat(100), (x, i) => i + 1)


//3. Convert only values of an object into one array.
let values = Object.values(user)

//4 . Convert an array into one object
let myObj = {}
Object.assign(myObj, arr);
console.log(myObj);

if(Array.isArray(arr))
console.log("yes it is")
else
console.log("no it isn't")

//5 Copy an array.
    //copy by refrence
arr=[1,2,3]
arr2=arr
arr2[0]=50
console.log(arr)
   //copy by value
   arr3=arr.slice()
   arr3[0]=100
   console.log(arr)