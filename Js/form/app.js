const form=document.querySelector('form')
const submit=document.querySelector('form>button')
const confirm=document.querySelector('.confirm')
const inputs=document.querySelectorAll('form >div input')
const spans=document.querySelectorAll('form .confirmation > div span:nth-child(2)')

submit.addEventListener('click',()=>{
   
    event.preventDefault()

    form.classList.add('submit')
    inputs.forEach((i)=>{
        spans.forEach(s=>{
            s.innerHTML=i.value
        })
    })
})
confirm.addEventListener('click',()=>{
    event.preventDefault()
    alert("submited")
})
