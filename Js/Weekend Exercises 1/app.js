ex1 = (isYes) => isYes ? "yes" : "false";

function ex2_1(arr) {
    // get smallest num
    const min1 = Math.min(...arr)
    const iMin1 = arr.indexOf(min1)
    // remove smalleset num
    arr.splice(iMin1, iMin1 + 1)
    // get another smallest num
    const min2 = Math.min(...arr)
    return min1 + min2;
}
console.log(ex2_1([1, 2, 3, 4]));

ex2_2 = (arr) => parseInt(arr.join(''), 2)

function findNextSquare(perfect) {
    const num = Math.sqrt(perfect)
    if (!Number.isInteger(num))
        return -1
    return Math.pow(num + 1, 2)
}

function findUniq(arr) {
    obj={}
    arr.forEach(v=>{
        if(v in obj)
        obj[v]+=1
        else
        obj[v]=1
    })

   return Object.entries(obj).reduce((p,c)=>{
        if(p[1]>c[1])
        return Number(c[0])

        return Number(p[0])
    })
}


function Summation(num){
    sum=0;
    for (let i = 1; i <= num; i++) {
        sum+=i
    }
    return sum
}