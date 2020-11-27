const xhr = new XMLHttpRequest()

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon?offset=30&limit=30", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
    const JSONdata = xhr.responseText
    const data = JSON.parse(JSONdata)
    showData(data.results)
    }
}

function showData(arr){
    for (let i = 0; i < arr.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
        
    }
}