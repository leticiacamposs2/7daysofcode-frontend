const { criarTabuleiro, criarTeclado, embaralharLista } = require('../core/helpers.js');


test('cria o tabuleiro com o número correto de linhas e colunas', () => {

    document.body.innerHTML = '<div id="tabuleiro"></div>';

    const parentElement = document.getElementById('tabuleiro');
    const rows = 5;
    const colunas = 5;

    criarTabuleiro(rows, parentElement, colunas);

    const rowsCreated = parentElement.getElementsByClassName('row');

    expect(rowsCreated.length).toBe(rows);

    Array.from(rowsCreated).forEach(row => {
        const letters = row.getElementsByClassName('letter');
        expect(letters.length).toBe(colunas);
    });
});


test('cria o teclado virtual com o layout correto', () => {

    document.body.innerHTML = '<div id="teclado"></div>';

    const teclado = document.getElementById('teclado');
    const teclas = [
        ['Q', 'W', 'E', 'R', 'T', 'Y'],
        ['A', 'S', 'D', 'F', 'G', 'H'],
        ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER', 'ERASE']
    ];

    criarTeclado(teclas, teclado);

    const rowsCreated = teclado.getElementsByClassName('row');

    expect(rowsCreated.length).toBe(teclas.length);

    Array.from(rowsCreated).forEach((row, index) => {
        const buttons = row.getElementsByTagName('button');
        expect(buttons.length).toBe(teclas[index].length);

        Array.from(buttons).forEach((button, btnIndex) => {
            expect(button.textContent).toBe(teclas[index][btnIndex] === 'ERASE' ? '' : teclas[index][btnIndex]);
            if (teclas[index][btnIndex] === 'ERASE') {
                expect(button.querySelector('img')).not.toBeNull();
            }
        });
    });
});


test('embaralha a lista sem alterar o tamanho e os elementos', () => {

    const listaOriginal = ['house', 'candy', 'test', 'mouse', 'text', 'document', 'array'];
    const listaEmbaralhada = embaralharLista([...listaOriginal]);

    expect(listaEmbaralhada.length).toBe(listaOriginal.length);
    expect(listaEmbaralhada).toEqual(expect.arrayContaining(listaOriginal));
    expect(listaOriginal).toEqual(['house', 'candy', 'test', 'mouse', 'text', 'document', 'array']);
    expect(listaEmbaralhada).not.toEqual(listaOriginal);
});

