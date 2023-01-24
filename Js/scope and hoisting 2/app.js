var x = 10;
console.log(x); //10
if (true) {
    var x = 20;
    console.log(x); //20
}
console.log(x) //20

console.log("-".repeat(10));

var x = 10;
console.log(x); //10
if (true) {
    (function () {
        var x = 20;
        console.log(x); //20
    })();
}
console.log(x); //10


console.log("-".repeat(10));


var x = 10;
console.log(x); //10

function test() {
    var x = 20;
    console.log(x); //20
    if (x > 10) {
        let x = 30;
        console.log(x); //30
    }
    console.log(x); //20
}
test();
console.log(x) //10


console.log("-".repeat(10));

var x;
x = 10;

function test() {
    var x;
    if (x > 20) {
        x = 50;
    }
    console.log(x); //undefind
}
test();


console.log("-".repeat(10));

function test() {
    var x, y;
    if (false) {
        x = 50;
    }
    console.log(x); //undefind
    console.log(y); //undefind
    y = 100;
    console.log(y); //100
}
test()

debugger
console.log("-".repeat(10));


function test2() {
    foo();
    bar();//will throw an exeption
    
    function foo() {
        console.log('foo');
    }
   
    
    var bar = function () {
        console.log('bar');
    }
    bar();
}

test2()