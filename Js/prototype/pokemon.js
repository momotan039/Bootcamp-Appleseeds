function Pokemon(pokemonName, pokemonType,
    pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon=function(){
    console.log('I choose you,',this.name);
}
Pokemon.prototype.attack=function(attk_number){
console.log(this.name,this.attackList[attk_number]);
}

const p1 = new Pokemon('Pikacho','electric',['Run electricity'])
const p2 = new Pokemon('Tom','Watery',['Spray water'])
const p3 = new Pokemon('Mike','earthy',['Throw a stone'])



p1.callPokemon()
p1.attack(0)
p2.callPokemon()
p2.attack(0)
p3.callPokemon()
p3.attack(0)