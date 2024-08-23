import { carregarFrases } from '../services/api.js';

// Mockando a função fetch
global.fetch = jest.fn();

describe('carregarFrases', () => {
    const originalConsoleError = console.error;

    beforeEach(() => {
        fetch.mockClear(); // Limpa o mock entre os testes
        console.error = jest.fn(); // Suprime o console.error
    });

    afterEach(() => {
        console.error = originalConsoleError; // Restaura o console.error original
    });

    test('deve carregar as frases com sucesso', async () => {
        const mockData = ['frase1', 'frase2', 'frase3'];

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockData
        });

        const data = await carregarFrases();
        expect(data).toEqual(mockData); // Verifica se os dados carregados são iguais aos mockados
        expect(fetch).toHaveBeenCalledTimes(1); // Verifica se o fetch foi chamado uma vez
        expect(fetch).toHaveBeenCalledWith('./data/lista-palavras.json'); // Verifica se o fetch foi chamado com o URL correto
    });

    test('deve lançar um erro quando a resposta não é OK', async () => {
        fetch.mockResolvedValueOnce({
            ok: false
        });

        const data = await carregarFrases();
        expect(data).toEqual([]); // Verifica se, em caso de erro, um array vazio é retornado
        expect(fetch).toHaveBeenCalledTimes(1);
    });

    test('deve retornar um array vazio quando ocorre um erro de rede', async () => {
        fetch.mockRejectedValueOnce(new Error('Network error'));

        const data = await carregarFrases();
        expect(data).toEqual([]); // Verifica se, em caso de erro de rede, um array vazio é retornado
        expect(console.error).toHaveBeenCalledWith('Erro ao carregar as palavras:', new Error('Network error'));
        expect(fetch).toHaveBeenCalledTimes(1);
    });
});
