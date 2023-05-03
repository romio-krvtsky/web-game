const form = document.getElementById("setting-form");

form.onsubmit = (e) => {
    e.preventDefault();

    const {elements} = document.forms["setting-form"];
    console.log("elements", elements);

    alert(
        `Points required - ${elements.words.value}\n
Round timer - ${elements.seconds.value}\n
Skip penalty - ${elements.penalty.checked ? "ON" : "OFF"}`);

    window.localStorage.setItem("roundTimer", elements.seconds.value);
    window.localStorage.setItem("penalty", elements.penalty.value);
    window.location.href = "../html/word_difficulty.html";
};

//alert(window.localStorage.getItem("teamNames"))

const teamInfo = JSON.parse(teamInfoString);

