const levelLinks = document.querySelectorAll(".lvl-link");
let words = {}

fetch("https://awsbucketforalias.s3.eu-north-1.amazonaws.com/words.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        words = data;
    })
    .catch(error => {
        console.error(error);
    });


levelLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        const level = this.textContent.trim();
        let words_set = words[level];
        window.localStorage.setItem("words_set", JSON.stringify(words_set));
    });
});
