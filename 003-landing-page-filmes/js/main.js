addEventListener('input', (event) => {
    if (event?.target?.name === 'onlyFavorites') listFavoriteMovies();
    if (event?.target?.name === 'movie-name') searchMovies();
});

let movies = [];

function createMovieImageElement(filme) {
    const movieImageElement = document.createElement('div');
    movieImageElement.className = 'movie-image';

    const imageElement = document.createElement('img');
    imageElement.src = `${BASE_URL_IMAGE}${filme.poster_path}`;
    imageElement.alt = filme.original_title;
    movieImageElement.appendChild(imageElement);

    return movieImageElement;
}

function createMovieTextElement(filme) {
    const movieTextElement = document.createElement('div');
    movieTextElement.className = 'movie-text';

    const h4Element = document.createElement('h4');
    h4Element.textContent = `${filme.original_title} (${filme.vote_count})`;
    movieTextElement.appendChild(h4Element);

    const ratingFavoritesElement = createRatingFavoritesElement(filme);
    movieTextElement.appendChild(ratingFavoritesElement);

    return movieTextElement;
}

function createRatingFavoritesElement(filme) {
    const ratingFavoritesElement = document.createElement('div');
    ratingFavoritesElement.className = 'rating-favorites';

    const ratingElement = createRatingElement(filme);
    ratingFavoritesElement.appendChild(ratingElement);

    const favoriteElement = createFavoriteElement(filme);
    ratingFavoritesElement.appendChild(favoriteElement);

    return ratingFavoritesElement;
}

function createRatingElement(filme) {
    const ratingElement = document.createElement('div');
    ratingElement.className = 'rating';

    const imageRatingElement = document.createElement('img');
    imageRatingElement.src = PATH_IMAGE_STAR;
    imageRatingElement.alt = 'Star Icon';
    ratingElement.appendChild(imageRatingElement);

    const spanElement = document.createElement('span');
    spanElement.textContent = filme.vote_average;
    ratingElement.appendChild(spanElement);

    return ratingElement;
}

function createFavoriteElement(filme) {
    const favoriteElement = document.createElement('div');
    favoriteElement.className = 'favorite';

    const imageFavoriteElement = document.createElement('img');
    imageFavoriteElement.src = filme.isFavorited ? PATH_IMAGE_HEART_COMPLETE : PATH_IMAGE_HEART;
    imageFavoriteElement.alt = 'Heart Icon';
    favoriteElement.appendChild(imageFavoriteElement);

    const spanFavoriteElement = document.createElement('span');
    spanFavoriteElement.textContent = filme.isFavorited ? 'Favoritado' : 'Favoritar';
    favoriteElement.appendChild(spanFavoriteElement);

    favoriteElement.addEventListener('click', () => {
        filme.isFavorited = !filme.isFavorited;
        imageFavoriteElement.src = filme.isFavorited ? PATH_IMAGE_HEART_COMPLETE : PATH_IMAGE_HEART;
        spanFavoriteElement.textContent = filme.isFavorited ? 'Favoritado' : 'Favoritar';
        filme.isFavorited ? saveToLocalStorage(filme) : removeFromLocalStorage(filme.id);
    });

    return favoriteElement;
}

function createMovieDescriptionElement(filme) {
    const movieDescriptionElement = document.createElement('div');
    movieDescriptionElement.className = 'movie-description';

    const spanDescriptionElement = document.createElement('span');
    spanDescriptionElement.textContent = filme.overview;
    movieDescriptionElement.appendChild(spanDescriptionElement);

    return movieDescriptionElement;
}

function movieListing(filmes) {
    const moviesDiv = document.querySelector('.movies');
    moviesDiv.innerHTML = '';

    filmes.forEach(filme => {

        filme.isFavorited = checkIfFavorited(filme.id);

        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        moviesDiv.appendChild(movieElement);

        const movieInformationsElement = document.createElement('div');
        movieInformationsElement.className = 'movie-informations';
        movieElement.appendChild(movieInformationsElement);

        movieInformationsElement.appendChild(createMovieImageElement(filme));
        movieInformationsElement.appendChild(createMovieTextElement(filme));

        movieElement.appendChild(createMovieDescriptionElement(filme));
    });
}

function searchMovies() {
    const pesquisa = document.getElementById('movie-name');
    const movieDiv = document.querySelector('.movie');
    if (!pesquisa.value && movieDiv == null) return getPopularMovies();

    searchMovies(pesquisa.value).then(movies => movieListing(movies));
}

function listFavoriteMovies() {
    const checkbox = document.getElementById('onlyFavorites');
    checkbox.checked ? movieListing(getLocalStorage()) : getPopularMovies();
}

function checkIfFavorited(movieId) {
    const filmes = getLocalStorage();
    return filmes.some(filme => filme.id === movieId);
}

getPopularMovies()