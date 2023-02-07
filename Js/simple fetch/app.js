const title=document.getElementById('title')
const joke=document.getElementById('joke')
function getJoke() {
    fetch('https://api.jokes.one/jod').then(res => res.json()).then(res => {
        title.innerText='title joke:'+res.contents.jokes[0].joke.title
        joke.innerText=res.contents.jokes[0].joke.text
    })
}