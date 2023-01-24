
const words=["Ashraf",'Mohammed','Ali','Shibly','Rafat','Adel']
const goal=document.querySelector(".center .goal .letters")
const word_elm=document.querySelector(".center .word")
const button=document.querySelector("button")

function fillWord(word){
    const chars=word.split('')
    const chars_elems=chars.reduce((c,p,i)=>{
        const span=document.createElement('span')
        span.innerHTML=chars[i]
        c.push(span)
        return c
    },[])
    goal.append(...chars_elems)
}
function createEmptyInputs(word){
    const chars=word.split('')
    const squars=chars.reduce((c,p,i)=>{
        const input=document.createElement('input')
        input.classList.add('char')
        c.push(input)
        return c
    },[])
    word_elm.append(...squars)
}

function refreshWord(){
    const i=Math.floor(Math.random() * (words.length ) )
    const random_word=words[i]
        fillWord(random_word)
        createEmptyInputs(random_word)
}

function runGame(){
    refreshWord()
}

button.addEventListener("click",()=>{
    word_elm.innerHTML=""
    goal.innerHTML=""
    refreshWord()
})
runGame()


