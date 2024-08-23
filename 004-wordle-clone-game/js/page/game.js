import { criarTabuleiro, criarTeclado, embaralharLista } from '../core/helpers.js';
import { carregarFrases } from '../services/api.js';

document.addEventListener('DOMContentLoaded', function () {

    exibirTabuleiro();
    exibirTeclado();
    iniciarJogo();

});

function exibirTabuleiro() {
    const boardGameElement = document.querySelector('.board-game');
    const linhas = 6;
    const colunas = 5;

    return criarTabuleiro(linhas, boardGameElement, colunas);
}

function exibirTeclado() {
    const tecladoElement = document.querySelector('.keyboard');
    const teclas = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ERASE']
    ];

    return criarTeclado(teclas, tecladoElement);
}

async function iniciarJogo() {

    const palavras = await obterPalavras();

}

async function obterPalavras() {

    const listaPalavras = await carregarFrases();

    if (listaPalavras.length === 0) {
        console.error('A lista de frases está vazia.');
        return [];
    }

    const palavrasEmbaralhadas = embaralharLista(listaPalavras.words);
    const palavrasSelecionadas = palavrasEmbaralhadas.slice(0, 6);

    console.log("Lista de frases:", listaPalavras);
    console.log("Frases escolhidas:", JSON.stringify(palavrasSelecionadas));

    return palavrasSelecionadas;

}

export { exibirTabuleiro, exibirTeclado, iniciarJogo, obterPalavras };
