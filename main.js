// Funções e Variáveis
let estado_menu = 'fechado';


function abrirMenu(){
    console.log("ABRIR rodando")
    let capa = document.getElementById("capa")
    capa.style = "width: 100%; height: 100vh; background-color: #3F5866; position: absolute;"
    //estado_menu = 'aberto';
    
}

function fecharMenu(){
    console.log("FECHAR menu rodando");
    let capa = document.getElementById("capa");
    capa.style = "width: 0; height: 0; background-color: none; position: none;";
    estado_menu = 'fechado'
}

    // Quando o menu for clicado
function menuClicado() {
    console.log("menu clicado");
    if (estado_menu === 'fechado'){
        console.log("ação no menu = abrir");
        abrirMenu();
    }
    if (estado_menu === 'aberto') {
        console.log("ação no menu = fechar");
        //fecharMenu();
    }

}
