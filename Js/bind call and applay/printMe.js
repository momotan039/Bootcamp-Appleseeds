const person={
    name:'person',
    printName:function(){
        console.log('my name is',this.name);
    },
    printNameAfter:function(){
        setTimeout(this.printName.bind(this), 3000);
    }
}


person.printName()
person.printNameAfter()
