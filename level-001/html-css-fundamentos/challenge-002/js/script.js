
function listagemDeFilmes() {

    // Seleciona a div com a classe 'movies'
    const moviesDiv = document.querySelector('.movies');

    // Cria uma nova div com a classe 'movie' e adiciona à div 'movies'
    const moviesElement = document.createElement('div');
    moviesElement.className = 'movie';
    moviesDiv.appendChild(moviesElement);

    // Cria uma nova div com a classe 'movie-informations' e adiciona à div 'movie'
    const movieInformationsElement = document.createElement('div');
    movieInformationsElement.className = 'movie-informations';
    moviesElement.appendChild(movieInformationsElement);

    // Cria uma nova div com a classe 'movie-image' e adiciona à div 'movie-informations'
    const movieImageElement = document.createElement('div');
    movieImageElement.className = 'movie-image';
    movieInformationsElement.appendChild(movieImageElement);

    // Cria uma nova imagem e adiciona à div 'movie-image'
    const imageElement = document.createElement('img');
    imageElement.src = "https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg";
    imageElement.alt = "Batman (2022)";
    movieImageElement.appendChild(imageElement);

    // Cria uma nova div com a classe 'movie-text' e adiciona à div 'movie-informations'
    const movieTextElement = document.createElement('div');
    movieTextElement.className = 'movie-text';
    movieInformationsElement.appendChild(movieTextElement);

    // Cria um elemento h4 e adiciona à div 'movie-text'
    const h4Element = document.createElement('h4');
    h4Element.textContent = 'Batman (2022)';
    movieTextElement.appendChild(h4Element);

    // Cria uma nova div com a classe 'rating-favorites' e adiciona à div 'movie-text'
    const ratingFavoritesElement = document.createElement('div');
    ratingFavoritesElement.className = 'rating-favorites';
    movieTextElement.appendChild(ratingFavoritesElement);

    // Cria uma nova div com a classe 'rating' e adiciona à div 'rating-favorites'
    const ratingElement = document.createElement('div');
    ratingElement.className = 'rating';
    ratingFavoritesElement.appendChild(ratingElement);

    // Cria uma nova imagem e adiciona à div 'rating'
    const imageRatingElement = document.createElement('img');
    imageRatingElement.src = "images/star.png";
    imageRatingElement.alt = "Star Icon";
    ratingElement.appendChild(imageRatingElement);

    // Cria um elemento span e adiciona à div 'rating'
    const spanElement = document.createElement('span');
    spanElement.textContent = "9.2";
    ratingElement.appendChild(spanElement);

    // Cria uma nova div com a classe 'favorite' e adiciona à div 'rating-favorites'
    const favoriteElement = document.createElement('div');
    favoriteElement.className = 'favorite';
    ratingFavoritesElement.appendChild(favoriteElement);

    // Cria uma nova imagem e adiciona à div 'favorite'
    const imageFavoriteElement = document.createElement('img');
    imageFavoriteElement.src = "images/heart.svg";
    imageFavoriteElement.alt = "Heart Icon";
    favoriteElement.appendChild(imageFavoriteElement);

    // Cria um elemento span e adiciona à div 'favorite'
    const spanFavoriteElement = document.createElement('span');
    spanFavoriteElement.textContent = "Favoritar";
    favoriteElement.appendChild(spanFavoriteElement);

    // Cria uma nova div com a classe 'movie-description' e adiciona à div 'movie'
    const movieDescriptionElement = document.createElement('div');
    movieDescriptionElement.className = 'movie-description';
    moviesElement.appendChild(movieDescriptionElement);

    // Cria um elemento span e adiciona à div 'movie-description'
    const spanDescriptionElement = document.createElement('span');
    spanDescriptionElement.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    movieDescriptionElement.appendChild(spanDescriptionElement);
}

// Chama a função para adicionar os elementos ao DOM

listagemDeFilmes();
