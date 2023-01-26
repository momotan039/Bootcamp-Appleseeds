const roll=document.querySelector('.roll')
const hold=document.querySelector('.hold')
roll.addEventListener('mousedown',()=>{
    event.target.classList.add('pressing')
})
roll.addEventListener('mouseup',()=>{
    event.target.classList.remove('pressing')
})

hold.addEventListener('mousedown',()=>{
    event.target.classList.add('pressing')
})
hold.addEventListener('mouseup',()=>{
    event.target.classList.remove('pressing')
})