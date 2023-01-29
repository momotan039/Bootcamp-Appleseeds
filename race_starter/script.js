const player1={
    name:'player1',
    tds:document.querySelectorAll('#player1-race td'),
    pos:0
}

const player2={
    name:'player2',
    tds:document.querySelectorAll('#player2-race td'),
    pos:0
}

const keyBody=document.body.addEventListener('keyup',()=>{
const key=event.key;
if(key==='ArrowRight')
{
    stepForward(player1)
}
if(key==='ArrowLeft'){
    stepBack(player1)
}

if(key.toLowerCase()==='a'){
    stepBack(player2)
}

if(key.toLowerCase()==='d'){
    stepForward(player2)
}

const player=checkWinner()
if(!player)
return
setTimeout(() => {
alert(player.name+" winner")
const result=confirm('do you want to play again ? ')
if(result==1)
location.reload()
}, 500);
})

function stepForward(player){
    const i=player.pos;
    if(i===player.tds.length-1)
    return
    player.tds[i].classList.remove('active')
    player.pos+=1
    player.tds[i+1].classList.add('active')
}

function stepBack(player){
    const i=player.pos;
    if(i===0)
    return
    player.tds[i].classList.remove('active')
    player.pos-=1
    player.tds[i-1].classList.add('active')
}

function checkWinner(){
    const end=player1.tds.length-1
   if(player1.pos===end)
       return player1
   if(player2.pos===end)
    return player2
}