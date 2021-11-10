const baseURL = "https://pokeapi.co/api/v2/pokemon-species/"

function fetchResults(e){
    e.fetch(baseURL).then(function(result) {
        return result.json();
    }).then(function(json) {
        displayResults(json);
    });
}

