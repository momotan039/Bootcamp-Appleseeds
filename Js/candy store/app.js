const candyStore = {
    candies: [{
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    return candyStore.candies.filter(f => f.id === id)[0]
}

function getPrice(candyStore, id) {
    return candyStore.candies.filter(f => f.id === id)[0].price
}

function addCandy(candyStore, id, name, price,amount) {
    candyStore.candies.push({
        name:name,
        id:id,
        price:price,
        amount:amount
    })
}

function buy(candyStore,id){
const candy=getCandy(candyStore,id);
if(candy.amount==0){
console.warn("this candy not found in stack")
return
}
candy.amount-=1
candyStore.cashRegister+=candy.price
}

console.log(getCandy(candyStore, "5hd7y"));
buy(candyStore,"5hd7y")
console.log(getCandy(candyStore, "5hd7y"));
buy(candyStore,"5hd7y")
console.log(getCandy(candyStore, "5hd7y"));
buy(candyStore,"5hd7y")
console.log(getCandy(candyStore, "5hd7y"));
buy(candyStore,"5hd7y")
console.log(getCandy(candyStore, "5hd7y"));
buy(candyStore,"5hd7y")
console.log(getCandy(candyStore, "5hd7y"));