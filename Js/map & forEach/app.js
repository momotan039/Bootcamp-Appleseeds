function doubleValues(arr){
return arr.map((num)=>num*2)
}

function onlyEvenValues(arr){
  res=[]
  arr.forEach(num => {
    if(num%2===0)
        res.push(num)
  });
  return res
    }

    function showFirstAndLast(arr){
      res=[];
      arr.forEach((ele,i)=>{
        if((i===0 || i===arr.length-1)
            && typeof(ele)==="string")
        res.push(ele)
      })
      return res
}
function vowelCount(str){
    let vowels=['a','o','u','e','i']
    let obj={}
    str.split('').map((c)=>{
        sc=c.toLowerCase()
        if(vowels.includes(sc)){
            if(sc in obj)
                obj[sc]+=1
            else
            obj[sc]=1
        }
    })
    return obj
}

function capitalize(str){
    return str.split('').map(c=>c.toUpperCase()).join('');
}
      
function shiftLetters(str){
    return str.split('').map(c=>String.fromCharCode(c.charCodeAt()+1)).join('');
}

function swapCase(str){
return str.split(' ').map((word)=>{
    return capitalize(word)
}).join(' ')
}

console.log(doubleValues([1,2,3]));
console.log(onlyEvenValues([1,2,3]));
console.log(showFirstAndLast(["wer",2,"asdg"]));
console.log(vowelCount("hello my name is MOHAMMED & nice to meet youuu"));
console.log(capitalize("Mohammed"));
console.log(shiftLetters("abc"));
console.log(swapCase('hello my name is'))