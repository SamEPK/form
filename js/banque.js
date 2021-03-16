document.addEventListener("DOMContentLoaded", () => {
    console.log("chargé");
    let solde, somme, printout, confirmer, target;
    target = document.querySelector(".warning");
    somme = prompt("Faites votre retrait");
    confirmer = confirm("confirmer votre retrait");
    printout = document.querySelector("p");
    solde = 1000;

    if (somme >= 20 && somme <= 100) {
        solde = solde - somme;
        if (confirmer) {
            console.log("merci d'avoir confirmé");
            printout.innerHTML += `Votre retrait est de ${somme}€ <br> Votre nouveau solde est de ${solde}€`;
            target.classList.remove("warning");
            target.classList.add("success");
        } else {
            console.log("Demande annulée");
            printout.innerHTML += `Demande annulée`;
        }
    } else if (!somme) {
        alert("Veuillez saisir un montant correct");
        document.location.reload();
    } else {
        alert("Votre montant doit être compris entre 20 et 100€!");
        document.location.reload();
    }
});