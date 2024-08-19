
function criarTabuleiro(rows, parentElement, colunas) {

    for (let i = 1; i <= rows; i++) {

        const row = document.createElement('div');
        row.classList.add('row', `row-${i}`);

        for (let j = 1; j <= colunas; j++) {

            const letter = document.createElement('div');
            letter.classList.add('letter', `letter-${j}`);
            row.appendChild(letter);

        }

        parentElement.appendChild(row);
    }

}


function criarTeclado(teclas, teclado) {

    teclas.forEach((keys, teclaIndex) => {
        const row = document.createElement('div');
        row.classList.add('row', `row-${teclaIndex + 1}`);

        keys.forEach(key => {
            const button = document.createElement('button');
            button.type = 'button';

            if (key === 'ENTER' || key === 'ERASE') {
                button.classList.add('action', key.toLowerCase());
                if (key == 'ERASE') {
                    const img = document.createElement('img');
                    img.src = './images/erase.svg';
                    img.alt = 'botão com simbolo de deletar padrão dos teclados virtuais';
                    button.appendChild(img);
                } else {
                    button.textContent = key;
                }
            } else {
                button.classList.add('letter', `letter-${key}`);
                button.textContent = key;
            }

            row.appendChild(button);
        });

        teclado.appendChild(row);
    });
}
