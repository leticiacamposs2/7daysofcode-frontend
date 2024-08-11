
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

function enviarFormulario() {

    const inputName = document.getElementById("name");
    const inputBirthDate = document.getElementById("birth-date");
    const messageErrorName = document.getElementById("error-name");
    const messageErrorBirthDate = document.getElementById("error-birth-date");

    const camposFormulario = {
        inputs: {
            name: inputName,
            birthDate: inputBirthDate
        },
        errorMessage: {
            name: messageErrorName,
            birthDate: messageErrorBirthDate
        }
    };

    validarCamposFormulario(camposFormulario);
}

function validarCamposFormulario(camposFormulario) {

    const errorMessageName = camposFormulario.errorMessage.name;
    const errorMessageBirthDate = camposFormulario.errorMessage.birthDate;
    const nameValue = camposFormulario.inputs.name.value.trim();
    const birthDateValue = camposFormulario.inputs.birthDate.value.trim();

    validaName(nameValue, errorMessageName);
    validaBirthDate(birthDateValue, errorMessageBirthDate);

    console.log(`Nome: ${nameValue}`);
    console.log(`Data de Nascimento: ${birthDateValue}`);
}

function validaName(nameValue, errorMessageName) {

    errorMessageName.innerHTML = (nameValue.length < 3 || nameValue.length > 120 || !/^[A-Za-z\s]+$/.test(nameValue)) ?
        "O nome precisa ter pelo menos três letras e no máximo cento e vinte, e não pode conter números." : "";

}

function validaBirthDate(birthDateValue, errorMessageBirthDate) {

    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    errorMessageBirthDate.innerHTML = (!datePattern.test(birthDateValue)) ?
        "A data precisa estar no formato de DD/MM/AAAA e o mês deve estar entre 01 e 12." : "";

}
