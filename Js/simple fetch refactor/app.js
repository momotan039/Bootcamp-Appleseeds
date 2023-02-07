const title = document.getElementById('title')
const joke = document.getElementById('joke')

async function getJoke() {
    const data =await(await(fetch('https://api.jokes.one/jod'))).json()
    title.innerText = 'title joke:' + data.contents.jokes[0].joke.title
    joke.innerText = data.contents.jokes[0].joke.text
}