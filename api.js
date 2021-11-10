let baseURL='https://pokeapi.co/api/v2/pokemon-species/'
let url;
url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; // defining a new url to use later on


async function fetchResults() {
    fetch('https://pokeapi.co/api/v2/pokemon-species/1')
    .then(function (result) {
        return result.json();
    })
    .then(function (json) { 
        console.log(json); 
        displayResults(json);
    })
}

console.log(fetchResults());

async function displayResults(json) {
    let speciesName = json.name;
    if (speciesName == null) {
        console.log('No results');
    } else {
        console.log('Species Name: ', speciesName);
    }
    
    let newSpeciesListing = document.getElementById("newSpecies")
    newSpeciesListing.innerHTML=speciesName

    let pokedexNumber = json.pokedex_numbers[0].entry_number;
    let newPokedexNumber = document.getElementById("newPokedex")
    newPokedexNumber.innerHTML=pokedexNumber

    let legendaryStatus = json.is_legendary;
    let newLegendaryStatus = document.getElementById("newLegendaryStatus")
    newLegendaryStatus.innerHTML=legendaryStatus

    let evolvesFrom = json.evolves_from_species;
    let newEvolvesFrom = document.getElementById("newEvolvesFrom")
    newEvolvesFrom.innerHTML=evolvesFrom

    let evolvesTo = json.evolution_chain;
    let newEvolvesTo = document.getElementById("newEvolvesTo")
    newEvolvesTo.innerHTML=evolvesTo

    let habitat = json.habitat.name;
    let newHabitat = document.getElementById("newHabitat")
    newHabitat.innerHTML=habitat

    let generation = json.generation.name;
    let newGeneration = document.getElementById("newGeneration")
    newGeneration.innerHTML=generation
}


async function fetchEvolutionResults() {
    fetch('https://pokeapi.co/api/v2/evolution-chain/1/')
    .then(function (result) {
        return result.json();
    })
    .then(function (json2) { 
        console.log(json2); 
        displayEvolutionResults(json2);
    })
}

console.log(fetchEvolutionResults());

async function displayEvolutionResults(json2) {
    let evolvesTo = json2.chain.evolves_to[0].evolves_to[0].species.name;
    let newEvolvesTo = document.getElementById("newEvolvesTo")
    newEvolvesTo.innerHTML=evolvesTo
}





// let baseURL = 'https://pokeapi.co/api/v2/pokemon-species/';


// fetch("baseURL")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// function fetchResults(e){
//     e.fetch("baseURL").then(function(result) {
//         return result.json();
//     }).then(function(json) {
//         displayResults(json);
//     });
// }







// function displayResults(json) {
//     let speciesName = json.results[0].name;
//     if (speciesName == null) {
//         console.log('No results');
//     } else {
//         console.log('Species Name: ', speciesName);
//     }
    
//     // document.getElementById("speciesNames").appendChild<speciesName>
//     // document.createElement("p")
//     // document.p.innerHTML=speciesName
// }


// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response => { console.log(response) }).catch(error => { console.log(error) })



// fetch(baseURL)
// .then(function (response) {

// })
// .catch(function (err) {

// });

// fetch('name.json')
// .then(function (response) {
//     return response.json();
// })
// .then(function (data) {
//     appendData(data);
// })
// .catch(function (err) {
//     console.log('error: ' + err);
// });

// function appendData(data) {
// var nameContainer = document.getElementById("speciesName");
// for (var i = 0; i < data.length; i++) {
//     var div = document.createElement("div");
//     div.innerHTML = 'Name: ' + data[i];
//     nameContainer.appendChild(div);
// }
