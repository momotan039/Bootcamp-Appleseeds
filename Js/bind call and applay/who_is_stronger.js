const hero = {
    health: 5,
    power: 68,
    getStrength: function () {
        if (this.health <= 5) {
            return this.power - 10;
        } else return this.power;
    }
}

function whoIsStronger(getStrength) {
    const myStrength = 82;
    if (getStrength() < myStrength) {
        return "I am stronger";
    } else return "You are stronger";
}

// the problem is when call a function it refference to whoIsStronger function not the hero object
// so 'this' refer to the function not to the hero object

// first way to fix it using borrowing function by bind
console.log(whoIsStronger(hero.getStrength.bind(hero)));
// second way using arrow function
console.log(whoIsStronger(() => hero.getStrength()));

  