function getLength(arr){
    debugger
    len=[]
    for (let index = 0; index < arr.length; index++) {
        len.push(arr[index].length)
    }
    console.log(len)
    return len;
}
getLength(['adga','sd'])