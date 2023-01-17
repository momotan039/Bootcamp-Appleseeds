const foods = ["falafel", "sabich", "hummus",
    "pizza with extra pineapple"
];

foods.sort((a, b) => {
    return a.toLowerCase() > b.toLowerCase() ? 1 : -1
})
console.log(foods)

foods.sort((a, b) => {
    return a.toLowerCase() < b.toLowerCase() ? 1 : -1
})
console.log(foods)


///b

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

foodsWithUpperCase.sort((a,b)=>{
    return a.toUpperCase()<b.toUpperCase()?1:-1
})
console.log(foodsWithUpperCase)

foodsWithUpperCase.sort((a,b)=>{
    return a.toUpperCase()>b.toUpperCase()?1:-1
})

console.log(foodsWithUpperCase)