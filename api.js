const baseURL = 'https://pokeapi.co/api/v2/pokemon-species/'
let url;


async function fetchResults () {
    let number = document.getElementById("numberSelector").value
    document.getElementById("numberSelector").defaultValue = 0;

    url = (`${baseURL}${number}`);

    let pokemonBaseData = await fetch(url)
    let parsedPokemonData = await pokemonBaseData.json();
    displayResults(parsedPokemonData);

    console.log(parsedPokemonData);

    let evolutionData = await fetch(parsedPokemonData.evolution_chain.url);
    let parsedEvolutionData = await evolutionData.json();
    displayEvolutionResults(parsedEvolutionData);

    console.log(parsedEvolutionData);
}

function displayResults(json) {
    let speciesName = json.name;
    let newSpeciesListing = document.getElementById("newSpecies")
    newSpeciesListing.innerHTML=speciesName

    let mythicalStatus = json.is_mythical;
    let newMythicalStatus = document.getElementById("newMythicalStatus")
    newMythicalStatus.innerHTML=mythicalStatus

    let legendaryStatus = json.is_legendary;
    let newLegendaryStatus = document.getElementById("newLegendaryStatus")
    newLegendaryStatus.innerHTML=legendaryStatus

    let habitat = json.habitat.name;
    let newHabitat = document.getElementById("newHabitat")
    newHabitat.innerHTML=habitat

    let generation = json.generation.name;
    let newGeneration = document.getElementById("newGeneration")
    newGeneration.innerHTML=generation

    if(json.evolves_from_species !== null || undefined) {
        let evolvesFrom = json.evolves_from_species.name;
        let newEvolvesFrom = document.getElementById("newEvolvesFrom");
        newEvolvesFrom.innerHTML=evolvesFrom;
    } else if(json.evolves_from_species == null || undefined){
        newEvolvesFrom.innerHTML=" "
    };
};

function displayEvolutionResults(json2) {
    if(json2.chain.evolves_to[0].species.name !== null || undefined) {
        let evolvesTo = json2.chain.evolves_to[0].evolves_to[0];
        if(evolvesTo == null || undefined) {
            evolvesTo = json2.chain.evolves_to[0].species.name
        } else if (evolvesTo !== null || undefined) {
            evolvesTo = json2.chain.evolves_to[0].evolves_to[0].species.name;
        };
        let newEvolvesTo = document.getElementById("newEvolvesTo");
        newEvolvesTo.innerHTML=evolvesTo;
    } else {
        document.getElementById("newEvolvesTo").innerHTML=" "
    };
};

const submitBtn = document.querySelector('.enter')
submitBtn.addEventListener('click', fetchResults)