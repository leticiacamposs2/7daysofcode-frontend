
document.addEventListener("DOMContentLoaded", (event) => {

    const formulario = document.querySelector(".js-form");

    formulario.addEventListener("submit", function (event) {

        event.preventDefault();

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
            nameValue: inputName.value.trim(),
            birthDate: inputBirthDate,
            birthDateValue: inputBirthDate.value.trim()
        },
        errorMessage: {
            name: messageErrorName,
            birthDate: messageErrorBirthDate
        }
    };

    const isValidCampos = validarCamposFormulario(camposFormulario);

    if (isValidCampos) {
        exibeDadosConsole(camposFormulario);
    }
}

function validarCamposFormulario(camposFormulario) {

    const errorMessageName = camposFormulario.errorMessage.name;
    const errorMessageBirthDate = camposFormulario.errorMessage.birthDate;
    const nameValue = camposFormulario.inputs.nameValue;
    const birthDateValue = camposFormulario.inputs.birthDateValue;

    const isValidName = validaName(nameValue, errorMessageName);
    const isValidBirthDate = validaBirthDate(birthDateValue, errorMessageBirthDate);

    return isValidName && isValidBirthDate;

}

function validaName(nameValue, errorMessageName) {

    errorMessageName.innerHTML = (nameValue.length < 3 || nameValue.length > 120 || !/^[A-Za-z\s]+$/.test(nameValue)) ?
        "O nome precisa ter pelo menos três letras e no máximo cento e vinte, e não pode conter números." : "";

    return isEmpty(errorMessageName.innerHTML);

}

function validaBirthDate(birthDateValue, errorMessageBirthDate) {

    const datePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;

    errorMessageBirthDate.innerHTML = (!datePattern.test(birthDateValue)) ?
        "A data precisa estar no formato de DD/MM/AAAA e o mês deve estar entre 01 e 12." : "";

    return isEmpty(errorMessageBirthDate.innerHTML);

}

function exibeDadosConsole(camposFormulario) {

    console.log(`Nome: ${camposFormulario.inputs.nameValue}`);
    console.log(`Data de Nascimento: ${camposFormulario.inputs.birthDateValue}`);

}

function isEmpty(value) {
    return value === "" && value !== undefined && value !== null;
}