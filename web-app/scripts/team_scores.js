const teamList = document.getElementById("list");

const teamInfoString = localStorage.getItem("teamInfo");
const teamInfo = JSON.parse(teamInfoString);
console.log(teamInfo);

document.addEventListener("DOMContentLoaded", () => {

    const ratingList = document.querySelector(".rating__list");

    for (const [teamName, teamScore] of Object.entries(teamInfo)) {
        const listItem = document.createElement("li");
        listItem.classList.add("rating__list-item");
        listItem.textContent = `${teamName}: `;

        const scoreSpan = document.createElement("span");
        scoreSpan.textContent = teamScore;

        listItem.appendChild(scoreSpan);
        ratingList.appendChild(listItem);
    }

});


const descriptionTeamSpan = document.querySelector('.description__team');
let currentTeamIndex = window.localStorage.getItem("currentTeamIndex");


function updateDescriptionTeam() {
    if (currentTeamIndex >= Object.keys(teamInfo).length) {
        currentTeamIndex = 0;
        localStorage.setItem("currentTeamIndex", currentTeamIndex);
    }
    let teamName = Object.keys(teamInfo)[currentTeamIndex];
    window.localStorage.setItem("currentTeamName", teamName);
    console.log(teamName);
    descriptionTeamSpan.textContent = teamName;
}

updateDescriptionTeam();

localStorage.setItem("used_words", JSON.stringify([]));
