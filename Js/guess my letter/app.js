const r = Math.floor(Math.random() * (122 - 97) + 97)
const letter = String.fromCharCode(r)
const elm_letter = document.querySelector('.letter')
const elm_message = document.querySelector('.message')
const elm_letters = document.querySelector('.letters')
const elm_finish = document.querySelector('.finish')
const letters = []
document.body.addEventListener('keyup', () => {
    if (elm_message.classList.contains('true'))
        return
        debugger
    if(!(event.key.charCodeAt(0)>=97&&event.key.charCodeAt(0)<=122))
    return
    letters.push(event.key)

    if (event.key !== letter) {
        elm_message.innerText = 'Nope, wrong letter'
        elm_message.classList.add('wrong')
        elm_letters.innerText=letters.join(',')
        return
    }

    elm_message.innerText = 'Right Letter!'
    elm_message.classList.add('true')
    elm_letters.innerText=letters.join(',')
    elm_letter.innerText=event.key
    elm_finish.classList.remove('hide')
})
console.log(letter + r);

function refresh(){
    location.reload()
}