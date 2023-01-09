function percentageOfWorld1(population){
 return (population/7900*100).toFixed(1)+"%"
}

china=percentageOfWorld1(1441);
console.log(china)
italy=percentageOfWorld1(500);
console.log(italy)
england=percentageOfWorld1(600);
console.log(england)


percentageOfWorld2=population=>(population/7900*100).toFixed(1)+"%";


china=percentageOfWorld2(1441);
console.log(china)
italy=percentageOfWorld2(500);
console.log(italy)
england=percentageOfWorld2(600);
console.log(england)


console.warn("both ways have the same results")