let people = ["Greg", "Mary", "Devon", "James"];
for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
}
//2
people.shift()
//3 
people.pop()
//4
people.unshift("Matt")
//5
people.push("Mohammed")
//6
for (let index = 0; index < people.length; index++) {
    console.log(people[index])
    if(people[index]=="Mary")
    break
}
//7
copy=people.slice(2)

//8
console.log(people.indexOf("Mary"));
//9
console.log(people.indexOf("ds"));
//10
people = ["Greg", "Mary", "Devon", "James"];
people.splice(2,1,"Elizabeth","Artie")
console.log(people)
//11
const withBob=people.concat("Bob")
console.log(withBob)