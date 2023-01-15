function draw(N){
for (let r = 1; r <=N; r++) {
    str=""
//    for (let v = 0; v <r; v++) {
//        str+="#"
//    }
//    for(let s = 0; s <N-r; s++){
//     str+="-"
//    }
str+="#".repeat(r)
str+="-".repeat(N-r)
   console.log(str)
}
}

draw(2);