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
        imageElement.src = `https://image.tmdb.org/t/p/w200${filme.poster_path}`;;
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
        imageRatingElement.src = "images/star.png";
        imageRatingElement.alt = "Star Icon";
        ratingElement.appendChild(imageRatingElement);

        const spanElement = document.createElement('span');
        spanElement.textContent = filme.vote_average;
        ratingElement.appendChild(spanElement);

        const favoriteElement = document.createElement('div');
        favoriteElement.className = 'favorite';
        ratingFavoritesElement.appendChild(favoriteElement);

        const imageFavoriteElement = document.createElement('img');
        imageFavoriteElement.src = "images/heart.svg";
        imageFavoriteElement.alt = "Heart Icon";
        favoriteElement.appendChild(imageFavoriteElement);

        const spanFavoriteElement = document.createElement('span');
        spanFavoriteElement.textContent = filme.isFavorited ? "Favoritado" : "Favoritar";
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

getPopularFilmes()