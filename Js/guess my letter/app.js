const r=Math.floor(Math.random()*122+(122-97))

const letter=String.fromCharCode(r)

document.body.addEventListener('keyup',()=>{
console.log(event.key);
})

console.log(letter+r);