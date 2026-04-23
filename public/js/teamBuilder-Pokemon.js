var pokemon = [];

function ConstruirCardSelectd(){

    pokemon = []
    var time = ""
    const containerSelected = document.querySelector(".containerCardSelected")

    for (let i = 0; i < sessionStorage.length; i++) {
        const element = sessionStorage.getItem(`POKEMON${i}`)
        pokemon.push(JSON.parse(element))
    }

    for (let i = 0; i < pokemon.length; i++) {
        const element = pokemon[i];
        const type1 = element.types[0].type.name
        const type2 = element.types[1] ? element.types[1].type.name : null
        
        time += `
        <div id="IdPokemon${i}" class="cardSelecionado">
            <img src="${element.sprites.front_default}" alt="">
            <div class="selecionadosDetalhes">
                <h3><a href="#" onclick="EditarPokemon(${i})">${element.name}</a></h3>
                <span class="tipos tipo1 ${type1}">${type1}</span>
                <span class="tipos tipo2 ${type2? type2 : "" }">${type2? type2 : ""}</span>
            </div>
        </div>
        `
    }

    containerSelected.innerHTML += time;

}