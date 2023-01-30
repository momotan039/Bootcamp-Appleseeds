console.log(this); //the globel object of the document



const myObj = {
    name: "Timmy",
    greet: () => {
        console.log(`Hello ${this.name}`);
    },
};

//will print the name of golbal object
myObj.greet();
//fix it by convert the arrow function to declation function



// its point to global object cause,
//the arrow function related to where its created
// in this case the function created in the global object
const myFuncArrow = () => {
    console.log(this)
}
myFuncArrow()

