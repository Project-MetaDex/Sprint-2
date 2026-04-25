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

const statusPokemon = {
    hp: 0,
    ataque: 0,
    defesa: 0,
    ataqueEsp: 0,
    defesaEsp: 0,
    velocidade: 0
};

const limitePontos = 508;
const limitePorStatus = 252;

function alterarStatus(status, valor) {
    const totalAtual = calcularTotalStatus();
    const valorAtual = statusPokemon[status];

    if (valor > 0) {
        if (totalAtual >= limitePontos) return;
        if (valorAtual >= limitePorStatus) return;

        statusPokemon[status]++;
    }

    if (valor < 0) {
        if (valorAtual <= 0) return;

        statusPokemon[status]--;
    }

    atualizarStatusTela();
}

function calcularTotalStatus() {
    return Object.values(statusPokemon).reduce((total, valor) => total + valor, 0);
}

function atualizarStatusTela() {
    document.getElementById("hp").innerText = statusPokemon.hp;
    document.getElementById("ataque").innerText = statusPokemon.ataque;
    document.getElementById("defesa").innerText = statusPokemon.defesa;
    document.getElementById("ataqueEsp").innerText = statusPokemon.ataqueEsp;
    document.getElementById("defesaEsp").innerText = statusPokemon.defesaEsp;
    document.getElementById("velocidade").innerText = statusPokemon.velocidade;

    const pontosRestantes = limitePontos - calcularTotalStatus();
    document.getElementById("pontosRestantes").innerText = pontosRestantes;
}