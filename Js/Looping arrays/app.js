const populations=[34,65,74,45]
populationPercentages=populations=>{
percentages=[]
for (let i = 0; i < populations.length; i++) {
    percentages.push(percentageOfWorld(populations[i]))
}
return percentages;
}

function percentageOfWorld(p){
    const population=((p/7900)*100).toFixed(2) +("%");
    return population;
}
