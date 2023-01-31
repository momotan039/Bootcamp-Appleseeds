/*
/**
 * 
 * @param string name 
 * @param number life 
 * @param array of numbers passLevels 
 */
function Player(name, life, passLevels) {
    this.name = name,
        this.life = life,
        this.passLevels = passLevels
    this.timePassLevels = [1, 2, 3, 4]
}


Player.prototype.filterLevels = function (callback) {
    const result = []
    this.passLevels.forEach(pl => {
        if (callback(pl))
            result.push(pl)
    });
    return result
}

Player.prototype.findLevel = function (callback) {
    let res = undefined
    this.passLevels.forEach(pl => {
        if (callback(pl))
            res = pl
    });
    return res
}

Player.prototype.mapLevels = function (callback) {
    const result = []
    this.passLevels.forEach(pl => {
        result.push(callback(pl))
    });
    return result
}

Player.prototype.reduceLevels = function (callback) {
    let index=0
    let previous = this.passLevels[0];
    let current=this.passLevels[1];
    this.passLevels.forEach((pl) => {
        previous=callback(previous,current,index)
        current=pl
        index++
    });
    return previous
}

const p = new Player('mohammed', 100, ['looby', 'loobyTown', 'Holy', 'HolyLand'])
console.log(p.filterLevels(f => f.includes('looby')));
console.log(p.findLevel(l => l === 'Holy'));
console.log(p.mapLevels(l => {
    return l + ' finish'
}));

console.log(p.reduceLevels((p,c,i) => {
    return p+','+c;
}));
