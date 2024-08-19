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

    const listaFrases = await carregarFrases();

    if (listaFrases.length === 0) {
        console.error('A lista de frases está vazia.');
        return;
    }

    const frasesEmbaralhadas = embaralharArray(listaFrases);
    const frasesSelecionadas = frasesEmbaralhadas.slice(0, 6);

    console.log("Lista de frases:", listaFrases);
    console.log("Frases escolhidas:", JSON.stringify(frasesSelecionadas));

    return frasesSelecionadas;

}