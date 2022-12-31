
// configration static nav
let links=document.querySelector("nav.static-navigation").children
Array.from(links).forEach(link => {
    link.addEventListener("click",()=>{
        clearSelectedLink(links)
        link.querySelector(".row").classList.add("selected")
    })
});

function clearSelectedLink(links){
    Array.from(links).forEach(link => {
        link.querySelector(".row").classList.remove("selected")
    });
}

// handel message button
let msgBtn=document.querySelector(".question-center .message-button");
let card=document.querySelector(".question-center .card");
msgBtn.addEventListener("click",()=>{
    card.classList.add("show");
})

let closeBtn=card.querySelector(".header .close-btn");
closeBtn.addEventListener("click",()=>{
   card.classList.remove("show")
})


