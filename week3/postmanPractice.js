
const planets = new XMLHttpRequest()
const planetsUrl = "https://swapi.dev/api/planets"

planets.open("GET", planetsUrl, true)
planets.send()

planets.onreadystatechange = function(){
    if (planets.readyState === 4 && planets.status === 200) {
        const JSONdata = planets.responseText
        const data = JSON.parse(JSONdata)
        console.log("swapi problem #1:", data.results)
    }
}


const generalGrievous = new XMLHttpRequest()
const genGUrl = "https://swapi.dev/api/people/?page=8"


generalGrievous.open("GET", genGUrl, true)
generalGrievous.send()

generalGrievous.onreadystatechange = function(){
    if (generalGrievous.readyState === 4 && generalGrievous.status === 200) {
        const JSONdata = generalGrievous.responseText
        const data  = JSON.parse(JSONdata)
        console.log("swapi problem #2:",data.results[7])
    }
}


const allToDo = new XMLHttpRequest()
const allToDoUrl = "https://vschool-cors.herokuapp.com?url=http://api.vschool.io/jesseHampton/todo"

allToDo.open("GET", allToDoUrl, true)
allToDo.send()

allToDo.onreadystatechange = function(){
    if (allToDo.readyState === 4 && allToDo.status === 200) {
        const JSONdata = allToDo.responseText
        const data = JSON.parse(JSONdata)
        console.log("todo problem #3:",data)
    }
}

const favoriteBookById = new XMLHttpRequest()
const favoriteBookByIdUrl = "https://vschool-cors.herokuapp.com?url=http://api.vschool.io/jesseHampton/todo/5fb5f0a5ee6f8d3fc3feb46a"

favoriteBookById.open("GET", favoriteBookByIdUrl, true)
favoriteBookById.send()

favoriteBookById.onreadystatechange = function(){
    if (favoriteBookById.readyState === 4 && favoriteBookById.status === 200) {
        const JSONdata = favoriteBookById.responseText
        const data = JSON.parse(JSONdata)
        console.log("todo problem #4:",data)
    }
}


const deleteFavoriteMovie = new XMLHttpRequest()
const favoriteMovieByIdUrl = "https://api.vschool.io/jesseHampton/todo/5fb5f292ee6f8d3fc3feb46b"


deleteFavoriteMovie.open("DELETE", favoriteMovieByIdUrl, true)
deleteFavoriteMovie.onload = function (){
    let delObj = JSON.parse(deleteFavoriteMovie.responseText);
    if (deleteFavoriteMovie.readystate === 4 && deleteFavoriteMovie.status === 200){
        console.log(delObj);
    } 
}
deleteFavoriteMovie.send()

