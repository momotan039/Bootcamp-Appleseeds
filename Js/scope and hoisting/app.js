// undefined then 2
// because var must be declaration before calling
// but declartion function it would be in whole document
// it means global

function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;

    function foo() {
        return 2;
    }
}
funcA()




//--wrong answer// Aurelio De Rosa twice
//Aurelio De Rosa then undefined
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};

function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);






function funcC() {
    console.log("1");
}
funcC();

function funcC() {
    console.log("2");
}
funcC();





function funcD1() {
    d = 1;
}
funcD1();
console.log(d);

function funcD2() {
    e = 1;
    // need to remove a var word to be global variable
}
funcD2();
console.log(e);



function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE()
