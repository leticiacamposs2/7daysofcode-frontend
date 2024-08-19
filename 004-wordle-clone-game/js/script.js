document.addEventListener('DOMContentLoaded', function () {

    exibirTabuleiro();
    exibirTeclado();

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

