const objs=[
    {
        name:'mohammed',
        age:22,
    },
    {
        name:'akram',
        age:22,
    },
    {
        name:'khalid',
        age:22,
    },
    {
        name:'jameel',
        age:22,
    }
]
function extractOnlyValue(arr,key){
   return  arr.reduce(o=>o)
}

console.log(extractOnlyValue(objs,'name'));