document.addEventListener('DOMContentLoaded', function () {

    const boardGame = document.querySelector('.board-game');

    for (let i = 1; i <= 6; i++) {

        const row = document.createElement('div');
        row.classList.add('row', `row-${i}`);

        for (let j = 1; j <= 5; j++) {

            const letter = document.createElement('div');
            letter.classList.add('letter', `letter-${j}`);
            row.appendChild(letter);

        }

        boardGame.appendChild(row);
    }
});