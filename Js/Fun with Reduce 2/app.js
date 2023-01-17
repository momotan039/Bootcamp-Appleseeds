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
   return  arr.reduce((p,c)=>{
    p.push(c[key])
    return p
   },[])
}

console.log(extractOnlyValue(objs,'name'));

function countOnlyVowels(str){
return str.split('').reduce((p,c)=>{
    if(c in p)
    p[c]+=1
    else
    p[c]=1
    return p
},{})
}

console.log(countOnlyVowels("Mohammed"));


function addKeyAndValue(arr,key,val){
return arr.reduce((p,c,i)=>{
    p[i][key]=val
    return p
},arr)
}

console.log(addKeyAndValue(objs,'gender','male'));
