ex1=(isYes)=>isYes?"yes":"false";
function ex2_1(arr){
    // get smallest num
    const min1=Math.min(...arr)
    const iMin1=arr.indexOf(min1)
    // remove smalleset num
    arr.splice(iMin1,iMin1+1)
    // get another smallest num
    const min2=Math.min(...arr)
    return min1+min2;
}
console.log(ex2_1([1,2,3,4]));

ex2_2=(arr)=>parseInt(arr.join(''),2) 

function findNextSquare(perfect){
    const num=Math.sqrt(perfect)
    if(!Number.isInteger(num))
    return -1
    return Math.pow(num+1,2)
}