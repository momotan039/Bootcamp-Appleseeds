const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

function countLetters(arr){
result={}
arr.map((item,i)=>{
    //remove space in words
    item=item.replaceAll(' ','')
    //count chars
   item.toLowerCase().split('').map((c,i)=>{
    if(c in result){
        value=result[c];
        result[c]=value+1
    }
    else
    result[c]=1
   })
})
return result
}

countLetters(array)