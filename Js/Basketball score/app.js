function average(game1,game2,game3){
let avg=game1+game2+game3
avg/=3;
return Math.round(avg);
}

function checkWinner
(team1,score1,team2,score2){
    if(score1>score2)
    console.log(`${team1}'s team winner , score :`,score1)

    else if(score1<score2)
    console.log(`${team2}'s team winner , score :`,score2)
    
    else
    console.log("no one winner - Draw!!")
}

let mike=average(116,94,123)
let john=average(89,120,103)
checkWinner("mike",mike,"john",john)

console.warn("after change scores")
john=average(130,120,103)
checkWinner("mike",mike,"john",john)

console.warn("extra---")

mary=average(110,130,153)
checkWinner("mary",mary,"john",john)

console.warn("after change scores")

 john=average(150,160,120)
checkWinner("mary",mary,"john",john)


