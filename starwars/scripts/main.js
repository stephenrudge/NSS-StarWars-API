import {fetchFilms, fetchLuke, fetchStarships, fetchHoth, fetchSpecies, fetchPlanets, } from "./starWarsData.js"

const displayLuke = async () => {
  const data = await fetchLuke()
  renderLukeToDOM(data)
}

let html = ""
const renderLukeToDOM = (data) => {
    html += `<article>
      <section class="card">
        <p>Name: ${data.name}</p>
        <p>height: ${data.height}</p>
      </section>
    </article>
  `
  document.getElementById('app').innerHTML = html
}


const displayStarships = async () => {
  const data = await fetchStarships()
  renderStarshipsToDOM(data)
}
const renderStarshipsToDOM = (data) => {
  html+= `<article>
  <section class="card">
  <p> Number of Starships: ${data.results.length}</p>
  </section>
  </article>
  ` 
  document.getElementById('app').innerHTML = html 
}


const displayFilms = async () => {
  const filmData = await fetchFilms()
  console.log(`film Data: `.filmData)
  const filmResults = filmData.results
  renderFilmsToDOM(filmResults)
}

const renderFilmsToDOM = (films) => {
  for (const film of films) {
    html +=`
    <article>
    <section class="card">
    <p><b> Title:</b><i>${film.title} </i></p>
    <p><b>Director:</b><i> ${film.director}</i></p>
    <p><b> Release Date:</b><i> ${film.release_date}</i></p>
    <p><b>Opening Crawl:</b><i>${film.opening_crawl} 
    </section>
    </article>
    `
  }
  document.getElementById('app').innerHTML = html
}

const displayHoth = async () => {
  const data = await fetchHoth()
  renderHothToDOM(data)
}


const renderHothToDOM = (data) => {
  html += `<article>
  <section class="card">
  <p>Name: ${data.name}</p>
  <p>Gravity: ${data.gravity}</p>
  </section>
  </article>
  `
}
document.getElementById('app').innerHTML = html

const displayPlanetLoops = async () => {
  let page = 1
  let allPlanets = []
  let lastResult = []

  do {

    try {

      const data = await fetchPlanets(page)
      lastResult = data
      allPlanets.push(...data.results)
      page++
    } catch (err) {console.error(`Oops something is wrong ${err}`)}

  } while (lastResult.next !== null)

  allPlanets.sort ((a,b) => a.diameter - b.diameter)
  renderPlanetsToDOM(allPlanets)
}
const renderPlanetsToDOM= (planets) =>{

  for (const planet of planets) {
    html += `
    <article>
    <section class="card">
    <p><b>Planet: ${planet.name}
    <ul>
    <li> Diameter: ${planet.diameter}</li>
    </ul>
    </section>
    <article>
    `
  }
  document.getElementById("app").innerHTML = html
};



const displaySpecies = async () => {
  const speciesData = await fetchSpecies()
  const speciesResults = speciesData.results
  renderSpeciesToDOM(speciesResults)
};

const renderSpeciesToDOM = (species) => {
  for (const Species of species) {
    html +=`
    <article>
    <section class="card">
    <p><b> Species: </b><i>${Species.name} </i></p>
    <p><b>Language: </b><i> ${Species.language}</i></p>
    </section>
    </article>
    `
  }
  document.getElementById('app').innerHTML = html
}

let planetButton = document.querySelector("#displayPlanets")

planetButton.addEventListener (
"click", () => {
  displayPlanetLoops()
  
}
)


await displayLuke()//2
await displayStarships()//3
await displayHoth()//1
await displayFilms()//5
await displaySpecies()
