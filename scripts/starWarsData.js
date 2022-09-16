const API = {
  films: "https://swapi.dev/api/films/",
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  species: "https://swapi.dev/api/species/",
  starships: "https://swapi.dev/api/starships/",
  vehicles: "https://swapi.dev/api/vehicles/",
}

// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetchLuke = await fetch(`${API.people}/1`)
  const jsonData = await dataFetchLuke.json()
  return jsonData
};


export const fetchStarships= async () => {
  const dataStarships = await fetch (`${API.starships}/?page=4`)
  const jsonStarships = await dataStarships.json()
  return jsonStarships
};  

// API https://swapi.dev/documentation#planets/4


export const fetchFilms = async () => {
  const dataFetch = await fetch (`${API.films}`)
  const jsonFilms = await dataFetch.json()
  return jsonFilms
};

export const fetchHoth = async () => {
  const dataPlanets = await fetch (`${API.planets}/4`)
  const jsonPlanets = await dataPlanets.json()
  return jsonPlanets
};

export const fetchPlanets = async (pageNum) => {
  const dataFetch = await fetch (`${API.planets}/?page=${pageNum}`)
  const planetData = await dataFetch.json()
  return planetData
};

export const fetchSpecies = async () => {
  const dataSpecies = await fetch (`${API.species}`)
  const jsonSpecies = await dataSpecies.json()
  return jsonSpecies
};
