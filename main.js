const urlDogs = "https://dog.ceo/api/breeds/list/all"

// fetch(urlDogs).then(function(x){return x.json()}).then(function(x){console.log(x)})

async function start() {
      const response = await fetch(urlDogs)
      const data = await response.json()
      createBreedList(data.message)
}

start()

function createBreedList(breedList) {
      document.querySelector("#breed").innerHTML = `
      <select onchange="loadByBreed(this.value)">
            <option>Choose a dog</option>
            ${Object.keys(breedList).map(function(x){
                  return `<option>${x}</option>`
            }).join("")}
      </select>`
}

async function loadByBreed (x) {
      if (x!= "Choose a dog") {
            const response = await fetch(`https://dog.ceo/api/breed/${x}/images`)      
            const data = await response.json()
            createSlideShow(data.message)
      }
}

function createSlideShow (x) {
      document.getElementById("slideShow").innerHTML = `<div class="slide" style="background-image: url('${x[0]}')"></div>`
}