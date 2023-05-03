const teams = document.getElementById("teams");
const addBtn = document.getElementById("team-create");
const firstBtnDelete = document.getElementById("delete-1");
const secondBtnDelete = document.getElementById("delete-2");
const arrowButton = document.querySelector(".right-arrow");


let defaultTeamsCount = 2;
let count = 2;

function deleteTeam(e, team) {
    if (count <= 2)
        return;
    count -= 1;
    const deletedTeam = document.getElementById(`team-${team}`);
    deletedTeam.remove();
}

firstBtnDelete.onclick = (e) => deleteTeam(e, 1);
secondBtnDelete.onclick = (e) => deleteTeam(e, 2);


addBtn.onclick = () => {
    defaultTeamsCount += 1;
    count += 1;
    let teamsCount = defaultTeamsCount;
    const team = document.createElement("div");
    team.classList.add("teams-field__item");
    team.id = `team-${teamsCount}`;

    team.innerHTML = `<span>Team ${teamsCount}</span>
                    <button id="delete-${teamsCount}" class="teams-field__item-btn">
                      <img src="../images/cross.svg" alt="">
                    </button>`;

    teams.appendChild(team);
    const deleteBtn = document.getElementById(`delete-${teamsCount}`);
    deleteBtn.onclick = (e) => deleteTeam(e, teamsCount);
};

function editTeamName(e) {
    if (e.target.tagName === "SPAN") {
        const span = e.target;
        span.contentEditable = true;
        span.focus();

        // Change the team name on pressing Enter key
        span.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) { // Enter key
                event.preventDefault();
                span.contentEditable = false;
            }
            if (span.innerText.length >= 15 && event.keyCode !== 8 && event.keyCode !== 46 && !event.ctrlKey && !event.metaKey) {
                event.preventDefault();
            }
        });
    }
}

const teamNames = [];

function saveTeams() {
    const teamNameSpans = document.querySelectorAll(".teams-field__item span");
    teamNameSpans.forEach(team => {
            const teamName = team.innerText.trim();
            teamNames.push(teamName);
        }
    );
    window.localStorage.setItem("teamNames", teamNames);
}

const teamInfo = {};
function saveTeamInfo() {

    const teamNameSpans = document.querySelectorAll(".teams-field__item span");

    teamNameSpans.forEach(team => {
        const teamName = team.textContent.trim();
        teamInfo[teamName] = 0;
    });

    localStorage.setItem("teamInfo", JSON.stringify(teamInfo));
}

arrowButton.onclick = (e) => saveTeamInfo();


teams.addEventListener("click", editTeamName);


window.addEventListener("unload", function () {
    window.localStorage.setItem("teamsCount", count);

});
