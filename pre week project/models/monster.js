class Monster extends Character{
    constructor({strength=1,defence=1,dexterity=1,health=100,gold=0,level=1,xp=100}){
        super({
            strength:strength,
            defence:defence,
            dexterity:dexterity,
            health:health,
            gold:gold,
            level:level,
            xp:xp
        })
    }
}