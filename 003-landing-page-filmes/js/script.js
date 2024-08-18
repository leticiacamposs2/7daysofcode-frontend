
addEventListener('input', (event) => {

    if (event?.target?.name === 'onlyFavorites') listarFilmesFavoritos();

    if (event?.target?.name === 'movie-name') pesquisarFilmes();

});

let movies = [];

function listagemDeFilmes(filmes) {

    const moviesDiv = document.querySelector('.movies');
    moviesDiv.innerHTML = '';

    filmes.forEach(filme => {

        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        moviesDiv.appendChild(movieElement);

        const movieInformationsElement = document.createElement('div');
        movieInformationsElement.className = 'movie-informations';
        movieElement.appendChild(movieInformationsElement);

        const movieImageElement = document.createElement('div');
        movieImageElement.className = 'movie-image';
        movieInformationsElement.appendChild(movieImageElement);

        const imageElement = document.createElement('img');
        imageElement.src = `${BASE_URL_IMAGE}${filme.poster_path}`;
        imageElement.alt = filme.original_title;
        movieImageElement.appendChild(imageElement);

        const movieTextElement = document.createElement('div');
        movieTextElement.className = 'movie-text';
        movieInformationsElement.appendChild(movieTextElement);

        const h4Element = document.createElement('h4');
        h4Element.textContent = `${filme.original_title} (${filme.vote_count})`;
        movieTextElement.appendChild(h4Element);

        const ratingFavoritesElement = document.createElement('div');
        ratingFavoritesElement.className = 'rating-favorites';
        movieTextElement.appendChild(ratingFavoritesElement);

        const ratingElement = document.createElement('div');
        ratingElement.className = 'rating';
        ratingFavoritesElement.appendChild(ratingElement);

        const imageRatingElement = document.createElement('img');
        imageRatingElement.src = `${PATH_IMAGE_STAR}`;
        imageRatingElement.alt = 'Star Icon';
        ratingElement.appendChild(imageRatingElement);

        const spanElement = document.createElement('span');
        spanElement.textContent = filme.vote_average;
        ratingElement.appendChild(spanElement);

        const favoriteElement = document.createElement('div');
        favoriteElement.className = 'favorite';
        ratingFavoritesElement.appendChild(favoriteElement);

        const imageFavoriteElement = document.createElement('img');
        imageFavoriteElement.src = `${PATH_IMAGE_HEART}`;
        imageFavoriteElement.alt = 'Heart Icon';
        favoriteElement.appendChild(imageFavoriteElement);

        const spanFavoriteElement = document.createElement('span');
        spanFavoriteElement.textContent = filme.isFavorited ? 'Favoritado' : 'Favoritar';
        favoriteElement.appendChild(spanFavoriteElement);

        const movieDescriptionElement = document.createElement('div');
        movieDescriptionElement.className = 'movie-description';
        movieElement.appendChild(movieDescriptionElement);

        const spanDescriptionElement = document.createElement('span');
        spanDescriptionElement.textContent = filme.overview;
        movieDescriptionElement.appendChild(spanDescriptionElement);

    });
}

async function getPopularFilmes() {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${CHAVE_API}&language=pt-BR&page=1`);
        const data = await response.json();
        listagemDeFilmes(data.results);
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


function pesquisarFilmes() {

    const pesquisa = document.getElementById('movie-name');
    const movieDiv = document.querySelector('.movie');

    if (!pesquisa.value && movieDiv == null) return getPopularFilmes();

    searchMovies(pesquisa.value).then(movies => listagemDeFilmes(movies));

}

function listarFilmesFavoritos() {

    const checkbox = document.getElementById('onlyFavorites');

    if (checkbox.checked) {

        console.log('selecionado');

    } else {

        console.log('não selecionado');
    }


}

getPopularFilmes()