// generate locations - return an array with X locations.
// generate monster - return an object with monster specs.
// create player - returns an objet with player spacs.
// mapLocationMonsters - create multiple monsters, and attach them to every location. returns an object with locations as keys and array of monsters in each location.
// listLocations - prints the locations array.
// goToLocation - gets a location name as param. sets the user current location. inside a location you can fight only the monsters inside this location.
// listMonsters - list all monster names in a location, and the gold for killing them.
// fightMonster - get monster name, starts a fight.

import { Player } from "./models/player";

let players=[]
function GeneratePlayers(){

    return[
        new Player('goku','./images/goku.jpg',{
            level:5,
            strength:5,
            dexterity:5,
        }),
        new Player('Vegeta','./images/goku.jpg',{
            level:5,
            strength:4,
            dexterity:4,
        }),
        new Player('Gohan','./images/goku.jpg',{
            level:4,
            strength:4,
            dexterity:3,
        }),
        new Player('Buu','./images/goku.jpg',{
            level:3,
            strength:4,
            dexterity:4,
        }),
       ]
       
}

function runGame(){
    players=GeneratePlayers()
}

runGame();