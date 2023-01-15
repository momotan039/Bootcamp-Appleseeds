function isString(str,printStr){
    if(typeof(str)==="string")
    printStr(str)
}
function print(str){
console.log(str)
}

function firstWordUpperCase(str,splitDashed){
arr=str.split(' ');
arr[0]=arr[0].toUpperCase();
str=arr.join(" ")
str=splitDashed(str)
console.log(str)
}
function dahsed(str){
    str=str.split(' ').join('#')
   return str;
}
isString("mohammed",print)

firstWordUpperCase("hi every one",dahsed)


function makeItVertical(str,createLadder){
createLadder(str)
}

function makeLadderWord(str){
    for (let i = 0; i < str.length; i++) {
        let res=""
        res+=" ".repeat(str.length-i-1)
        res+=str[i]
        console.log(res);
    }
}

makeItVertical("mohammed",makeLadderWord)
