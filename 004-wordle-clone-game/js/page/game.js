import { criarTabuleiro, criarTeclado, embaralharLista, ehVazioOuIndefinido } from '../core/helpers.js';
import { carregarFrases } from '../services/api.js';

document.addEventListener('DOMContentLoaded', function () {

    exibirTabuleiro();
    exibirTeclado();
    iniciarJogo();

});

const teclas = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ERASE']
];

let palpiteAtual = '';
let tentativasRestantes = 6;


function exibirTabuleiro() {
    const boardGameElement = document.querySelector('.board-game');
    const linhas = 6;
    const colunas = 5;

    return criarTabuleiro(linhas, boardGameElement, colunas);
}


function exibirTeclado() {
    const tecladoElement = document.querySelector('.keyboard');
    return criarTeclado(teclas, tecladoElement);
}


async function iniciarJogo() {

    await obterPalavras();

    obterCliques();

}


function obterCliques() {
    document.addEventListener('click', function (event) {
        const tecla = event.target.textContent;
        validaClique(tecla);
    });
}


function validaClique(tecla) {

    if (tecla === 'ENTER') {
        validarPalpite();

    } else if (tecla === 'ERASE') {
        apagarUltimaLetra();

    } else if (isTeclaValida(tecla)) {
        adicionarLetra(tecla);

    } else {
        console.log("VALOR INVÁLIDO", tecla);
    }
}


function isTeclaValida(tecla) {
    const teclasValidas = teclas.flat(); // Transformar o array de arrays em um único array
    return teclasValidas.includes(tecla);
}


function adicionarLetra(tecla) {
    if (palpiteAtual.length < 5) { // Adicionar letra se o palpite tiver menos de 5 letras
        palpiteAtual += tecla;
        console.log("Letra adicionada:", palpiteAtual);
    } else {
        console.log("O palpite já tem 5 letras.");
    }
}


function apagarUltimaLetra() {
    if (palpiteAtual.length > 0) {
        palpiteAtual = palpiteAtual.slice(0, -1); // Remove a última letra do palpite
        console.log("Palpite após apagar:", palpiteAtual);
    }
}


async function validarPalpite() {
    if (palpiteAtual.length === 5) {
        if (tentativasRestantes > 0) {
            const palavras = await obterPalavras();
            if (palavras.includes(palpiteAtual)) {
                console.log("Palpite válido:", palpiteAtual);
                // Aqui você pode adicionar lógica para processar o palpite
                tentativasRestantes--; // Decrementar tentativas restantes
            } else {
                console.log("Palpite inválido:", palpiteAtual);
            }
            palpiteAtual = ''; // Limpar palpite atual após validação
        } else {
            console.log("Você não tem mais tentativas.");
        }
    } else {
        console.log("Palpite incompleto. Certifique-se de que tenha 5 letras.");
    }
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
