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
let indiceLinha = 1;

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
        if (event.target.tagName === 'BUTTON') {
            const tecla = event.target.textContent.trim().toUpperCase();
            validaClique(tecla, event.target);
        }
    });
}


function validaClique(tecla, targetElement) {
    if (tecla === 'ENTER') {
        validarPalpite();

    } else if (tecla === 'ERASE' || targetElement.classList.contains('erase')) {
        apagarUltimaLetra();

    } else if (ehTeclaValida(tecla)) {
        if (palpiteAtual.length < 5) {
            adicionarLetra(tecla);
            atualizarGrid();
        }

    } else {
        console.log("VALOR INVÁLIDO", tecla);
    }
}

function ehTeclaValida(tecla) {
    const teclasValidas = teclas.flat(); // Transformar o array de arrays em um único array
    return teclasValidas.includes(tecla);
}


function adicionarLetra(tecla) {
    if (palpiteAtual.length < 5) {
        palpiteAtual += tecla;
        console.log("Letra adicionada:", palpiteAtual);
    }
}


function apagarUltimaLetra() {
    if (palpiteAtual.length > 0)
        palpiteAtual = palpiteAtual.slice(0, -1);
    atualizarGrid();
}

function atualizarGrid() {
    const linhaAtual = document.querySelector(`.row.row-${indiceLinha}`);
    if (linhaAtual) {
        const letras = linhaAtual.querySelectorAll('.letter');
        letras.forEach((letraElement, index) => {
            letraElement.textContent = palpiteAtual[index] || '';
        });
    }
}


async function validarPalpite() {
    if (palpiteAtual.length === 5) {
        if (tentativasRestantes > 0) {
            const palavras = await obterPalavras();
            if (palavras.includes(palpiteAtual)) {
                console.log("Palpite válido:", palpiteAtual);
                tentativasRestantes--;
                indiceLinha++; // Mover para a próxima linha após um palpite válido
                if (indiceLinha <= 6) { // Verificar se ainda há linhas disponíveis
                    palpiteAtual = ''; // Limpar palpite atual após validação
                    indiceColuna = 0; // Resetar coluna
                } else {
                    console.log("Você não tem mais tentativas.");
                }
            } else {
                console.log("Palpite inválido:", palpiteAtual);
            }
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
