const input=document.getElementsByTagName('input')[0]
const movie_elm={
    poster:document.querySelector('.movie .poster'),
    title:document.querySelector('.movie .title_movie'),
    genre:document.querySelector('.movie .genre'),
    year:document.querySelector('.movie .year'),
    plot:document.querySelector('.movie .plot'),
    director:document.querySelector('.movie .director'),
    actors:document.querySelector('.movie .actors'),
   imdb:document.querySelector('.movie .imdb'),
   rotten:document.querySelector('.movie .rotten'),
   metacritic:document.querySelector('.movie .metacritic'),
}
 async function fetchMovie(){
    const movieTitle=input.value
    debugger
    if(movieTitle==="")
    {
        alert("Please Enter a Movie")
        return
    }
     await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=c8fbed3e`)
    .then((res)=>res.json()).then(movie=>{
        if('Error' in movie)
        {
            alert(movie.Error)
            return
        }
        console.log(movie);
        addMovieToPage(movie)
        input.value=""
        input.focus()
    })
}
function addMovieToPage(movie){
    movie_elm.title.innerText=movie.Title
    debugger
    movie_elm.poster.src=movie.Poster
    movie_elm.year.innerText='release Year:'+movie.Year
    movie_elm.genre.innerText='genres:'+movie.Genre
    movie_elm.plot.innerText='plot:'+movie.Plot
    movie_elm.director.innerText='director:'+movie.Director
    movie_elm.actors.innerText='actors:'+movie.Actors
    //get ratings
    movie_elm.imdb.innerHTML=`Imdb:${movie.imdbRating}`
    movie.Ratings.forEach(rating => {
        debugger
        movie_elm.rotten.innerHTML=`Rotten Tomatoes:${rating.Value}`
        
        if(rating.Source==='Metacritic')
        movie_elm.metacritic.innerHTML=`Metacritic:${rating.Value}`
    });
}


document.addEventListener("keypress", async ()=>{
   if(event.charCode===13)
   await fetchMovie()
})