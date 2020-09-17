// the API from https://dog.ceo/dog-api/documentation/
// fetch("https://dog.ceo/api/breeds/list/all").then (function(response){
//       return response.json()}).then(function(data){console.log(data)})

const urlDogs = "https://dog.ceo/api/breeds/list/all"

async function start() {
      const response = await fetch(urlDogs)
      const data = await response.json()
      console.log(data) //just the message from data is interest
      createBreedList(data.message)
}

start()


function createBreedList(dataFromJSON) {
      document.getElementById("breed").innerHTML = `
            <select name="" id="">
                  <option>Choose a dog breed</option>
                  ${Object.keys(dataFromJSON).map()}
            </select>
      `
}