let words = JSON.parse(window.localStorage.getItem("usedWords"));
let teamInfo = JSON.parse(window.localStorage.getItem("teamInfo"));
const form = document.querySelector(".results-form");
const currentTeamName = window.localStorage.getItem("currentTeamName");
const skippedPoints = window.localStorage.getItem("skippedPoints");
const pointsRequired = window.localStorage.getItem("pointRequired");
console.log(window.localStorage.getItem("penalty"));

console.log(pointsRequired);


words.forEach((word) => {
    const div = document.createElement("div");
    div.classList.add("results-form__item");

    const span = document.createElement("span");
    span.classList.add("results-form__item__word");
    span.innerText = word;

    const input = document.createElement("input");
    input.type = "checkbox";
    input.name = "results-form__checkbox";
    input.classList.add("results-form__item__checkbox");

    div.appendChild(span);
    div.appendChild(input);

    form.insertBefore(div, form.lastElementChild);
});


let currentTeamIndex = window.localStorage.getItem("currentTeamIndex");
currentTeamIndex++;
localStorage.setItem("currentTeamIndex", currentTeamIndex);

function countPoints() {
    let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let count = 0;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count++;
        }
    }
    console.log(`Number of checked points: ${count}`);
    let currentScore = teamInfo[currentTeamName];
    console.log(currentScore);
    let newScore = currentScore + count;


    if (window.localStorage.getItem("penalty") === "true") {
        newScore -= skippedPoints;
    }

    console.log(newScore);
    teamInfo[currentTeamName] = newScore;
    if (newScore >= pointsRequired) {
        window.localStorage.setItem("winners", currentTeamName);
    }
    localStorage.setItem("teamInfo", JSON.stringify(teamInfo));
    localStorage.setItem("skippedPoints", 0);

}



