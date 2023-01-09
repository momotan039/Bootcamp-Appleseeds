// From function declarations to explicit and implicit
//return functions (one of each).

function welcome() {
    let welcome = 'Welcome to Appleseeds Bootcamp!';
    return welcome;
}
// Implicit return
welcome=()=>'Welcome to Appleseeds Bootcamp!'


function power(a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}

// explict return
power=a=>{
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
}



// From function expressions to IIFE functions.
(
    function
    squareRoot(a)
    {Math.sqrt(a) }
    )();

(function randomNumbers(){
    return Math.random() * (a - b) +b
})();
