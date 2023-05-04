const form = document.getElementById("setting-form");

form.onsubmit = (e) => {
    e.preventDefault();

    const {elements} = document.forms["setting-form"];
    console.log("elements", elements);

    alert(
        `Points required - ${elements.words.value}\n
Round timer - ${elements.seconds.value}\n
Skip penalty - ${elements.penalty.checked ? "ON" : "OFF"}`);

    let currentTeamIndex = 0;
    window.localStorage.setItem("currentTeamIndex", currentTeamIndex);
    window.localStorage.setItem("roundTimer", elements.seconds.value);
    window.localStorage.setItem("penalty", elements.penalty.checked);
    window.localStorage.setItem("pointRequired", elements.words.value);

    window.location.href = "../html/word_difficulty.html";
};


