const storm = {
    // add code here
    superPower: 'Flying',
}

function printSuperPower() {
    console.log("my superpower is " +
        this.superPower);
}


this.superPower='coding'

const printSuperPower2 = () => {
    console.log("my superpower is " +
        this.superPower);
}


//   storm.printMySuperPower()
printSuperPower.call(storm)
printSuperPower2()
