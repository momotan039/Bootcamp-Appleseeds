const bodyTable = document.getElementById('bodyTable')
showTable()
async function callPlanets() {
    const people=[]
    for (let i = 1; i <= 10; i++) {
        const person = await fetch("https://swapi.dev/api/people/" + i).then(res => res.json())
        const planet = await fetch(person.homeworld).then(res => res.json())
        const _person = {
            'name': person.name,
            'hair': person.hair_color,
            'height': person.height
        }
        _person['planet_name'] = planet.name
        _person['planet_population'] = planet.population
        people.push(_person)
    }
    return people
}

async function showTable() {
    try {
    let result=await callPlanets()
    result.forEach(person=>{
        const hr=`
        <td>${person.name}</td>
        <td>${person.hair}</td>
        <td>${person.height}</td>
        <td>${person['planet_name']}</td>
        <td>${person['planet_population']}</td>
        `
        bodyTable.innerHTML+=hr
    })
    // hide progress circle Loading
    const waiting=document.getElementById('waitingContainer')
    waiting.classList.add('hidden')
    } catch (err) {
        console.log(err);
    }
}