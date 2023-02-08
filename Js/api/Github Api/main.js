const input=document.getElementsByTagName('input')[0]
const users=[]
const usersElm=document.getElementsByClassName('users')[0]

async function fetchUser(){
    const userName=input.value
    if(userName==="")
    {
        alert("Please Enter a username")
        return
    }
    fetch('https://api.github.com/users/'+userName)
    .then((res)=>res.json()).then(user=>{
        if('message' in user)
        {
            alert("This User Not Found")
        }
        else{
            if(users.find(u=>u.name===user.name))
            alert("This Uesr Already Exist Here")
            else{
                users.push(user)
                usersElm.appendChild(createUesrCard(user))
            }
        }
        input.value=""
        input.focus()
    })
}
function addUserToPage(user){
    

}
function createUesrCard(user){
    //creates elements
    const card=document.createElement('div')
    const img=document.createElement('img')
    const h1=document.createElement('h1')
    const h2=document.createElement('h2')
    const a=document.createElement('a')
    //configure elemnts
    card.classList.add('card')
    img.src=user.avatar_url
    h1.innerText=user.name
    h2.innerText=user.public_repos+" public repo"
    a.href=user.url
    //apend childs
    card.append(img,h1,h2,a)
    return card
}

document.addEventListener("keypress", ()=>{
    debugger
   if(event.charCode===13)
    fetchUser()
})