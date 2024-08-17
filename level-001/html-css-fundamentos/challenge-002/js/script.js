
const movies = [
    {
        image: 'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
        title: 'Batman',
        rating: 9.2,
        year: 2022,
        description: "Descrição do filme…",
        isFavorited: true,
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
        title: 'Avengers',
        rating: 9.2,
        year: 2019,
        description: "Descrição do filme…",
        isFavorited: false
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
        title: 'Doctor Strange',
        rating: 9.2,
        year: 2022,
        description: "Descrição do filme…",
        isFavorited: false
    },
]


function listagemDeFilmes(filmes) {

    const moviesDiv = document.querySelector('.movies');

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
        imageElement.src = filme.image;
        imageElement.alt = filme.title;
        movieImageElement.appendChild(imageElement);

        const movieTextElement = document.createElement('div');
        movieTextElement.className = 'movie-text';
        movieInformationsElement.appendChild(movieTextElement);

        const h4Element = document.createElement('h4');
        h4Element.textContent = `${filme.title} (${filme.year})`;
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
        spanElement.textContent = filme.rating;
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
        spanDescriptionElement.textContent = filme.description;
        movieDescriptionElement.appendChild(spanDescriptionElement);
    });
}

listagemDeFilmes(movies);
