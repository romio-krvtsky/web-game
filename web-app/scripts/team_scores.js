const teamList = document.getElementById("list");

const teamInfoString = localStorage.getItem("teamInfo");
const teamInfo = JSON.parse(teamInfoString);

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
let currentTeamIndex = -1;

function updateDescriptionTeam() {
    currentTeamIndex++;
    if (currentTeamIndex >= Object.keys(teamInfo).length) {
        currentTeamIndex = 0;
    }
    const teamName = Object.keys(teamInfo)[currentTeamIndex];
    descriptionTeamSpan.textContent = teamName;
}

updateDescriptionTeam();