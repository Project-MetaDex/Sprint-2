var times = [
    `<div class="card" id="card-1">
                <div id="iconCard">
                <img src="assets/icon/Icon_Poke.svg" alt="">
                </div>

                <div class="cardTitle">
                    <h2>Time 01</h2>
                    <p>Criado em 18 de abr de 2026</p>
                </div>
                

                <div class="buttons">
                    <button class="editar">Editar</button>
                    <button class="excluir" onclick="excluirTime(0)"><img id="imgExcluir" src="assets/icon/Icon-Trash.svg" alt=""></button>
                </div>

                <ul class="imgList">
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png" alt=""></li>
                </ul>
            </div>
`,
`<div class="card" id="card-2">
                <div id="iconCard">
                <img src="assets/icon/Icon_Poke.svg" alt="">
                </div>

                <div class="cardTitle">
                    <h2>Time 02</h2>
                    <p>Criado em 18 de abr de 2026</p>
                </div>
                

                <div class="buttons">
                    <button class="editar">Editar</button>
                    <button class="excluir" onclick="excluirTime(1)"><img id="imgExcluir" src="assets/icon/Icon-Trash.svg" alt=""></button>
                </div>

                <ul class="imgList">
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png" alt=""></li>
                </ul>
            </div>
`,
`<div class="card" id="card-3">
                <div id="iconCard">
                <img src="assets/icon/Icon_Poke.svg" alt="">
                </div>

                <div class="cardTitle">
                    <h2>Time 03</h2>
                    <p>Criado em 18 de abr de 2026</p>
                </div>
                

                <div class="buttons">
                    <button class="editar">Editar</button>
                    <button class="excluir" onclick="excluirTime(2)"><img id="imgExcluir" src="assets/icon/Icon-Trash.svg" alt=""></button>
                </div>

                <ul class="imgList">
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png" alt=""></li>
                </ul>
            </div>
`,
`<div class="card" id="card-4">
                <div id="iconCard">
                <img src="assets/icon/Icon_Poke.svg" alt="">
                </div>

                <div class="cardTitle">
                    <h2>Time 04</h2>
                    <p>Criado em 18 de abr de 2026</p>
                </div>
                

                <div class="buttons">
                    <button class="editar">Editar</button>
                    <button class="excluir" onclick="excluirTime(3)"><img id="imgExcluir" src="assets/icon/Icon-Trash.svg" alt=""></button>
                </div>

                <ul class="imgList">
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/3.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/9.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/20.png" alt=""></li>
                    <li><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/151.png" alt=""></li>
                </ul>
            </div>
`
];

function listarTimes (){

    for (let i = 0; i < times.length; i++) {
        let element = times[i];
        let container = document.querySelector(".cardTimes")

        container.innerHTML += element
        
    }

}

function excluirTime (id){

    times.splice(id, 1)
    document.querySelector(`#card-${id + 1}`)?.remove();

}