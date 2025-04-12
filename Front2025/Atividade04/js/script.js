const secretWord = "BRISA"; /*( Palavra secreta em maiúsculas )*/
const maxAttempts = 6;
let currentAttempt = 0;

const board = document.getElementById("game-board");
const form = document.getElementById("guess-form");
const input = document.getElementById("guess-input");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = input.value.toUpperCase();

    if (guess.length !== 5) {
        alert("Digite uma palavra de 5 letras!");
        return;
    }

    if (currentAttempt >= maxAttempts) return;

    checkGuess(guess);
    input.value = "";
});

function checkGuess(guess) {
    const row = [];
    const letterCount = {};

  /*( Contar letras da palavra secreta )*/
    for (let letter of secretWord) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

  /*( Primeira passada: letras certas na posição certa )*/
    for (let i = 0; i < 5; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        tile.textContent = guess[i];

    if (guess[i] === secretWord[i]) {
        tile.classList.add("correct");
        letterCount[guess[i]]--;
    }

    row.push(tile);
  }

  /*( Segunda passada: letras presentes, mas em posição errada )*/
    for (let i = 0; i < 5; i++) {
        const tile = row[i];

        if (
            !tile.classList.contains("correct") &&
            secretWord.includes(guess[i]) &&
            letterCount[guess[i]] > 0
        ) {
            tile.classList.add("present");
            letterCount[guess[i]]--;
        } else if (!tile.classList.contains("correct")) {
            tile.classList.add("absent");
        }
    }

  /*( Cria uma nova linha para a tentativa )*/
    const guessRow = document.createElement("div");
    guessRow.classList.add("guess-row");

  /*( Adiciona os tiles da tentativa na linha )*/
    row.forEach(tile => guessRow.appendChild(tile));

  /*( Adiciona a linha ao tabuleiro )*/
    board.appendChild(guessRow);

    currentAttempt++;

  /*( Verificação de vitória ou derrota )*/
    if (guess === secretWord) {
        message.textContent = "Parabéns! Você acertou!";
        input.disabled = true;
    } else if (currentAttempt === maxAttempts) {
        message.textContent = `Fim de jogo! A palavra era: ${secretWord}`;
        input.disabled = true;
    }
}