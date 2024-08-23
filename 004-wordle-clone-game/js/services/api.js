const carregarFrases = async () => {
    return fetch('./data/lista-palavras.json')
        .then(async (response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data;
        })
        .catch((error) => {
            console.error('Erro ao carregar as palavras:', error);
            return [];
        })
}

module.exports = { carregarFrases };
