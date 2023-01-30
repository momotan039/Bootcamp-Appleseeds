let table

function createTable(){
    if(table)
    table.remove()

     table=document.createElement('table')
    const num=+document.getElementById('snum').value
    for (let r = 1; r <= num; r++) {
    const tr=document.createElement('tr')
    for (let c = 1; c <= num; c++) {
        const td=document.createElement('td')
        if(r!==1 || c!==1)
        td.innerText=(c*r)
        tr.appendChild(td) 
        if(c==1 || r==1)
        td.classList.add('first')
    }
    table.appendChild(tr)
}
document.body.appendChild(table)
}