export default class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }

}


export function getUserAge(user){
console.log('user that called '+user.name+' his age '+user.age);
}