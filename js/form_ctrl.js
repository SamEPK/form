document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let prenom, age, birthday, verif, target, target_2, warning, submit;
    verif = '\u2713';
    target_2 = document.querySelector("section");
    target = document.querySelector("p");
    submit = document.getElementsByTagName("input")[2];

    let formActive = () => {
        warning = document.querySelector(".warning");
        age = document.getElementsByTagName("input")[0].value;
        prenom = document.getElementsByTagName("input")[1].value;
        birthday = age - 2021;
        if (!age || !prenom) {
            warning.style.display = "block";
            warning.textContent = "les champs sont vides!";
            warning.classList.add('warning');
        } else {
            warning.style.display = "block";
            warning.textContent = `${verif}Bonjour ${prenom}, vous êtes né en ${birthday}`;
            warning.classList.add('success');
        }
    };

    submit.addEventListener("click", event => {
        event.preventDefault();
        formActive();
    });
});