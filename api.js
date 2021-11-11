
const baseURL = 'https://pokeapi.co/api/v2/pokemon-species/'
let url;
// let url2;

const submitBtn = document.querySelector('.enter')
submitBtn.addEventListener('click', fetchResults)
let number = document.getElementById("numberSelector").value

async function fetchResults () {
    let pokemonBaseData = await fetch(`${baseURL}${number}`)
    let parsedPokemonData = await pokemonBaseData.json();
    displayResults(parsedPokemonData);

    // let evolutionData = await fetch(parsedPokemonData.evolution_chain.url);
    // let parsedEvolutionData = await evolutionData.json();
    // displayEvolutionResults(parsedEvolutionData);

    // console.log(parsedEvolutionData);
}

async function displayResults(json) {
    let speciesName = json.name;
    let newSpeciesListing = document.getElementById("newSpecies")
    newSpeciesListing.innerHTML=speciesName

    let pokedexNumber = json.pokedex_numbers[0].entry_number;
    let newPokedexNumber = document.getElementById("newPokedex")
    newPokedexNumber.innerHTML=pokedexNumber

    let legendaryStatus = json.is_legendary;
    let newLegendaryStatus = document.getElementById("newLegendaryStatus")
    newLegendaryStatus.innerHTML=legendaryStatus

    if(json.evolves_from_species !== null) {
        let evolvesFrom = json.evolves_from_species.name;
        let newEvolvesFrom = document.getElementById("newEvolvesFrom");
        newEvolvesFrom.innerHTML=evolvesFrom;
    };

    let habitat = json.habitat.name;
    let newHabitat = document.getElementById("newHabitat")
    newHabitat.innerHTML=habitat

    let generation = json.generation.name;
    let newGeneration = document.getElementById("newGeneration")
    newGeneration.innerHTML=generation
};

// async function displayEvolutionResults(json2) {
//     if(json2.chain.evolves_to[0].species.name !== null) {
//         let evolvesTo = json2.chain.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species?.name;
//         if(evolvesTo == undefined) {
//             evolvesTo = json2.chain.evolves_to[0].species.name
//         };
//         let newEvolvesTo = document.getElementById("newEvolvesTo");
//         newEvolvesTo.innerHTML=evolvesTo;
//     };
// };
