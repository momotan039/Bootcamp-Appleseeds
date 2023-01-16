const data = [{
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

function getNames(){
    data.reduce
    return data.map((user)=>{
       return {name:user.name}
    })
}

function getBefore1990(){
    return data.filter(user=>Number(user.birthday.split('-')[2])<1990)
}

function getBefore1990(){
    return data.filter(user=>Number(user.birthday.split('-')[2])<1990)
}

function countFood(){
    let obj={}
     data.forEach((user)=>{
        user.favoriteFoods.fish.forEach(f => {
            if(f in obj)
            obj[f]+=1
            else
            obj[f]=1
        });
        
        user.favoriteFoods.meats.forEach(meat => {
            if(meat in obj)
            obj[meat]+=1
            else
            obj[meat]=1
        });
})
return obj
}
console.log(getNames())

console.log(getBefore1990());
console.log(countFood());