function makeAllCaps(words){
return new Promise((res,rej)=>{
    let notString=false
     const  result=words.map(word=>{
        if(/\d/.test(word))
        notString=true
        return word.toUpperCase()
    })
    if(notString)
       return rej('not all values in array are string')

       return res(result)
})
}

function sortWords(words){
   return  new Promise((res,rej)=>{
          words.sort((a,b)=>{
            if(a>b)
            return 1
            if(a<b)
            return -1
            return 0
        })
        return res(words)
    })
}

const words=['mo4m','dad','hi','sami','ahmad','abeer','husam','taim','abaas']
makeAllCaps(words).then(res=>{
    sortWords(res).then(res=>{
        console.log(res);
    })
}).catch(err=>{
    console.log(err);
})


