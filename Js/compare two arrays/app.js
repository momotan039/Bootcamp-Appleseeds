const food = ["Noodle", "Pasta", "Ice-cream",
,"Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];

function compare(arr1,arr2){
    res=[]
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
                if(arr1[i]===arr2[j] && !res.includes( arr1[i]))
                    res.push(arr1[i])
        }
    }
    return res
}

console.log(compare(food,food1))