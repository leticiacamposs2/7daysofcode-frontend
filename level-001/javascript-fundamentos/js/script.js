
document.addEventListener("DOMContentLoaded", (event) => {

    const formulario = document.querySelector(".js-form");

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value;
        const birthDate = document.querySelector("#birth-date").value;

        console.log(`Nome: ${name}`);
        console.log(`Data de Nascimento: ${birthDate}`);
    });
});