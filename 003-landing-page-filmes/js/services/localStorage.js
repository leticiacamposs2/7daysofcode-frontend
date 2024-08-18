
function getLocalStorage() {
    return JSON.parse(localStorage.getItem("filmes-favoritos")) || [];
}

function setLocalStorage(filmes) {
    localStorage.setItem("filmes-favoritos", JSON.stringify(filmes));
}

function saveToLocalStorage(movie) {
    const filmes = getLocalStorage();
    filmes.push(movie);
    setLocalStorage(filmes);
}

function removeFromLocalStorage(movieId) {
    const filmes = getLocalStorage();
    const updatedFilmes = filmes.filter(filme => filme.id !== movieId);
    setLocalStorage(updatedFilmes);
}