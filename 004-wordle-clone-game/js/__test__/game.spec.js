import { exibirTabuleiro, exibirTeclado, iniciarJogo, obterPalavras } from '../page/game.js';
import { criarTabuleiro, criarTeclado, embaralharLista } from '../core/helpers.js';
import { carregarFrases } from '../services/api.js';


jest.mock('../core/helpers.js', () => ({
    criarTabuleiro: jest.fn(),
    criarTeclado: jest.fn(),
    embaralharLista: jest.fn(),
}));

jest.mock('../services/api.js', () => ({
    carregarFrases: jest.fn()
}));


describe('Funções do jogo', () => {

    const originalConsoleError = console.error;

    beforeEach(() => {
        document.body.innerHTML = `
        <div class="board-game"></div>
        <div class="keyboard"></div>
        `;
        // Resetar mocks
        jest.clearAllMocks();
        console.error = jest.fn(); // Mock console.error
    });

    afterEach(() => {
        console.error = originalConsoleError; // Restaurar console.error original
    });

    test('deve exibir o tabuleiro corretamente', () => {
        const boardGameElement = document.querySelector('.board-game');
        exibirTabuleiro();

        expect(criarTabuleiro).toHaveBeenCalledWith(6, boardGameElement, 5);
    });

    test('deve exibir o teclado corretamente', () => {
        const tecladoElement = document.querySelector('.keyboard');
        exibirTeclado();

        expect(criarTeclado).toHaveBeenCalledWith([
            ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
            ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ERASE']
        ], tecladoElement);
    });

    test('deve iniciar o jogo e obter palavras', async () => {
        const palavrasMock = { words: ['palavra1', 'palavra2', 'palavra3'] };
        carregarFrases.mockResolvedValueOnce(palavrasMock);
        embaralharLista.mockImplementation(list => list);

        const palavrasSelecionadas = await obterPalavras();

        expect(carregarFrases).toHaveBeenCalled();
        expect(embaralharLista).toHaveBeenCalledWith(palavrasMock.words);
        expect(palavrasSelecionadas).toEqual(['palavra1', 'palavra2', 'palavra3'].slice(0, 6));
    });

    test('deve lidar com lista de palavras vazia', async () => {
        carregarFrases.mockResolvedValueOnce({ words: [] });

        const palavras = await obterPalavras();

        expect(palavras).toEqual([]);
    });

    test('deve lidar com lista de palavras não vazia', async () => {
        carregarFrases.mockResolvedValueOnce({ words: ['palavra1', 'palavra2', 'palavra3'] });
        embaralharLista.mockImplementation((arr) => arr); // Mock do embaralharLista

        const palavras = await obterPalavras();

        expect(palavras).toEqual(['palavra1', 'palavra2', 'palavra3']);
        expect(console.error).not.toHaveBeenCalled();
    });
});
