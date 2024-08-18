async function getPopularMovies() {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${CHAVE_API}&language=pt-BR&page=1`);
        const data = await response.json();
        movieListing(data.results);
    } catch (error) {
        console.error('Erro ao buscar filmes populares:', error);
    }
}

async function searchMovies(query) {
    const url = `${BASE_URL}/search/movie?api_key=${CHAVE_API}&query=${encodeURIComponent(query)}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro na requisição: ' + response.statusText);
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Foram encontrados erros durante a pesquisa do filme: ', error);
    }
}