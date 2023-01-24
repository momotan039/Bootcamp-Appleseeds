var b = 1;

function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);

// result will return 5
// cause b its declaration before calling 
// otherFunction



var a = 1;

function b2() {
    a = 10;
    return;

    function a() {}
}
debugger
b2();
console.log(a); //1




let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);//3 3 3
}