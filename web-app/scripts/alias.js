let amountSeconds = parseInt(localStorage.getItem("roundTimer"));
//let amountSeconds = 5;
const timer = document.getElementById("timer");


function tick() {
    if (amountSeconds === 0) {
        window.location.href = "../html/points_scored.html";
        return;
    }
    amountSeconds -= 1;

    timer.textContent = `${Math.floor(amountSeconds / 60)
        .toString()
        .padStart(2, "0")}:${(amountSeconds % 60).toString().padStart(2, "0")}`;
}

setInterval(tick, 1000);


// game logic

const guessedWords = document.querySelector("#guessed");
const skippedWords = document.querySelector("#skipped");
// const aliasWord = document.querySelector("#alias-word");
let usedWords = [];

console.log(window.localStorage.getItem("penalty"));
function getRandomWord() {
    const words = JSON.parse(localStorage.getItem("words_set"));

    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];

    while (usedWords.includes(randomWord)) {
        randomIndex = Math.floor(Math.random() * words.length);
        randomWord = words[randomIndex];
    }

    usedWords.push(randomWord);
    localStorage.setItem("usedWords", JSON.stringify(usedWords));

    return randomWord;
}

function setRandomWord() {
    const aliasWord = document.getElementById("alias-word");
    aliasWord.textContent = getRandomWord();
}

let guessedPoints = 0;
let skippedPoints = 0;

setRandomWord();

document.getElementById("left-arrow").addEventListener("click", () => {
    guessedWords.textContent = `${+guessedWords.textContent + 1}`;
    guessedPoints++;
    setRandomWord();
});

document.getElementById("right-arrow").addEventListener("click", () => {
    skippedWords.textContent = `${+skippedWords.textContent + 1}`;
    skippedPoints++;
    window.localStorage.setItem("skippedPoints", skippedPoints);
    setRandomWord();
});

window.localStorage.setItem("guessedPoints", guessedPoints);
