const numbers=[1,2,3,6]

let s="32"

const max=()=>{
return numbers.reduce((p,c)=>p+c)
}

console.log(max());

const sumEven=()=>{
    return numbers.reduce((p,c,ci)=>{
        return c%2===0?p+c:p
    },0)
}

console.log(sumEven());

///1 2 3 6
//3 /1
//9 /2
//10.5 /3
//---
//3
const average=()=>{
    return numbers.reduce((p,c,ci)=>{
        debugger
        return (p+c)/(ci)
    })
}

console.log(sumEven());


console.log(average());