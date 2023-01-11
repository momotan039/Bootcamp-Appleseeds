let mycountry = {
    country: "Egypt",
    capital: 'Cairo',
    language: 'Arabic',
    population: 109,
    neighbours:['LIBYA','JORDAN','SAUDI ARABIA'],
    describe:function(){
        return `${this.country}
        has ${this.population} million people, their mother tongue is ${this.language}, they
        have ${this.neighbours.length} neighbouring countries and a capital called
        ${this.capital}`
    },
    // arrow function not work in class
    // its not recognize this keywork 
    // checkIsIsland:()=>this.neighbours.length===0?true:false
    checkIsIsland:function (){
        return this.neighbours.length===0?true:false
    }
}

console.log(mycountry.describe())
console.log(mycountry.checkIsIsland())

