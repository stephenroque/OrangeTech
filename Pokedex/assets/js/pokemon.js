const urlParams = new URLSearchParams(window.location.search)
const nameParam = urlParams.get("name")
const url = `https://pokeapi.co/api/v2/pokemon/${nameParam}`

function convertPokemonToHtml(pokemon) {
    const pokemonDesc = document.getElementById(`pokemonDesc`)
    
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    pokemon.types = types
    pokemon.type = type

    const abilities = pokemon.abilities.map((abilitiesSlot) => abilitiesSlot.ability.name)
    const [abilitie] = abilities
    pokemon.abilities = abilities
    pokemon.abilitie = abilitie

    const stats = pokemon.stats.map((statsSlot) => statsSlot.base_stat)
    const [stat] = stats
    pokemon.stats = stats


    const height = (pokemon.height * 0.1).toFixed(1)

    const weight = (pokemon.weight * 0.1).toFixed(1)

    pokemonDesc.innerHTML = `
        <div class="pokemon ${type}">
        <a href="./index.html"><i class="fa fa-arrow-left-long"></i></a>
        <div class="header">
            <span>
            <h1 class="name">${pokemon.name}</h1>
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            </span>
            <span class="number">#${pokemon.id}</span>
        </div>
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="Bulbasaur">
        <div class="descrition">
        <table>
            <tr><td><strong>About</strong></td></tr>
            <tr><td colspan="2"><hr></td></tr>
            <tr><td>Height</td><td>${height} cm</td></tr>
            <tr><td>Weight</td><td>${weight} kg</td></tr>
            <tr><td>Abilities</td><td>${pokemon.abilities.map((abilitie) => `${abilitie}`).join(', ')}</td></tr>
            <tr><td>&nbsp;</td></tr>
            <tr><td><strong>Stats</strong></td></tr>
            <tr><td colspan="2"><hr></td></tr>
            <tr><td>HP</td><td>${pokemon.stats[0]}</td></tr>
            <tr><td>Attack</td><td>${pokemon.stats[1]}</td></tr>
            <tr><td>Defense</td><td>${pokemon.stats[2]}</td></tr>
            <tr><td>Special Attack</td><td>${pokemon.stats[3]}</td></tr>
            <tr><td>Special Defense</td><td>${pokemon.stats[4]}</td></tr>
            <tr><td>Speed</td><td>${pokemon.stats[5]}</td></tr>
        </table>
        </div>
    </div>
    `
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => convertPokemonToHtml(jsonBody))



