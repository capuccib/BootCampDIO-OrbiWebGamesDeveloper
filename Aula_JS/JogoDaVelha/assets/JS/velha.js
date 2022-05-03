const quadrado = document.getElementsByClassName("quadrado");
let jogador = null;
const jogadorSelecionado = document.getElementById("jogadorSelecionado");



const mudaJogador = (valor) => {
    jogador = valor;
    jogadorSelecionado.innerHTML = "Jogador: "+jogador;

};

mudaJogador('X');

const quadradoSelecionado = (id) => {
    const idQuadrado = document.getElementById(id);

    if (idQuadrado.innerHTML != '-') return;

    idQuadrado.innerHTML = jogador;
    idQuadrado.style.color = "black";

    if (jogador === 'X') jogador ='O';
    else jogador = 'X';

    mudaJogador(jogador);


};