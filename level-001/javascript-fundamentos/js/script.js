
document.addEventListener("DOMContentLoaded", (event) => {

    carregarTabela();

    const formulario = document.querySelector(".js-form");

    formulario.addEventListener("click", function (event) {

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
        salvarDados(camposFormulario.inputs);
        carregarTabela();
        limparFormulario();

        mostraDialogo("Cadastro realizado com sucesso!", "success", 3000);
    }

}

function limparFormulario() { return document.getElementById("form").reset(); }

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

function salvarDados(camposFormulario) {

    const cadastro = {
        name: camposFormulario.nameValue,
        birthDate: camposFormulario.birthDateValue
    };

    let dadosAniversarios = recuperaDados();
    dadosAniversarios.push(cadastro);
    localStorage.setItem("aniversarios", JSON.stringify(dadosAniversarios));

}

function recuperaDados() {
    return JSON.parse(localStorage.getItem("aniversarios")) || [];
}

function carregarTabela() {

    const tabela = document.getElementById("tabela");
    const dadosAniversarios = recuperaDados();

    while (tabela.rows.length > 1) {
        tabela.deleteRow(1);
    }

    dadosAniversarios.forEach((cadastro, index) => {

        const novaLinha = tabela.insertRow();
        const colunaNome = novaLinha.insertCell(0);
        const colunaDataNascimento = novaLinha.insertCell(1);
        const colunaAcoes = novaLinha.insertCell(2);

        colunaNome.innerHTML = cadastro.name;
        colunaDataNascimento.innerHTML = cadastro.birthDate;

        const btnEditar = document.createElement("button");
        btnEditar.innerHTML = "Editar";
        btnEditar.className = "botao-editar";
        btnEditar.onclick = function () { editarCadastro(index); };

        const btnDeletar = document.createElement("button");
        btnDeletar.innerHTML = "Deletar";
        btnDeletar.className = "botao-deletar";
        btnDeletar.onclick = function () { deletarCadastro(index); };

        colunaAcoes.appendChild(btnEditar);
        colunaAcoes.appendChild(btnDeletar);
    });
}

function editarCadastro(index) {

    const dadosAniversarios = recuperaDados();
    const cadastro = dadosAniversarios[index];

    document.getElementById("name").value = cadastro.name;
    document.getElementById("birth-date").value = cadastro.birthDate;

    deletarCadastro(index);

}

function deletarCadastro(index) {

    let dadosAniversarios = recuperaDados();

    dadosAniversarios.splice(index, 1);
    localStorage.setItem("aniversarios", JSON.stringify(dadosAniversarios));

    carregarTabela();

}

function mostraDialogo(mensagem, tipo = "info", tempo = 3000) {

    if (document.getElementById("message")) {
        return false;
    }

    const cssMessage = "display: block; position: fixed; top: 0; left: 20%; right: 20%; width: 60%; padding-top: 10px; z-index: 9999";
    const cssInner = "margin: 0 auto; box-shadow: 1px 1px 5px black; padding: 15px; border-radius: 5px; color: white;";

    let tipoCor = "";
    if (tipo === "success") {
        tipoCor = "background-color: green;";
    } else if (tipo === "info") {
        tipoCor = "background-color: blue;";
    } else if (tipo === "warning") {
        tipoCor = "background-color: orange;";
    } else if (tipo === "danger") {
        tipoCor = "background-color: red;";
    }

    let dialogo = "";
    dialogo += '<div id="message" style="' + cssMessage + '">';
    dialogo += '    <div class="alert alert-' + tipo + ' alert-dismissable" style="' + cssInner + tipoCor + '">';
    dialogo += '    <span class="close" onclick="this.parentElement.parentElement.remove()">×</span>';
    dialogo += mensagem;
    dialogo += '    </div>';
    dialogo += '</div>';

    let body = document.getElementsByTagName("body")[0];
    let tempDiv = document.createElement("div");
    let messageElement = document.getElementById("message");

    tempDiv.innerHTML = dialogo;
    body.appendChild(tempDiv.firstChild);

    messageElement.style.display = "none";
    fadeIn(messageElement, 200);

    setTimeout(function () {
        fadeOut(messageElement, 300, function () {
            messageElement.remove();
        });
    }, tempo);

}

function fadeIn(element, duration) {

    let opacity = 0;
    let last = +new Date();

    element.style.display = "";
    element.style.opacity = opacity;

    let tick = function () {
        opacity += (new Date() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();

        if (opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };

    tick();

}

function fadeOut(element, duration, callback) {

    let opacity = 1;
    let last = +new Date();

    let tick = function () {
        opacity -= (new Date() - last) / duration;
        element.style.opacity = opacity;
        last = +new Date();

        if (opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
            if (callback) callback();
        }
    };

    tick();

}