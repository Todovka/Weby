let penize = localStorage.getItem("penize") !== null ? parseInt(localStorage.getItem("penize")) : 6100000000;
const obnova_penize = document.getElementById("penize");
obnova_penize.innerText = penize;


let koupenePolozky = JSON.parse(localStorage.getItem("koupenePolozky")) || [];

koupenePolozky.forEach(jmeno => {
    let element = document.getElementById(jmeno);
    if (element) {
        element.style.display = "none";
    }
});

function kupit(cena, jmeno) {
    if (penize >= cena) {
        penize -= cena;
        obnova_penize.innerText = penize;
        document.getElementById(jmeno).style.display = "none";

        localStorage.setItem("penize", penize);

        if (!koupenePolozky.includes(jmeno)) {
            koupenePolozky.push(jmeno);
            localStorage.setItem("koupenePolozky", JSON.stringify(koupenePolozky));
        }

    }
    else {
        alert("Nemáš dost peněz!");
    }
}
function schovat() {
    if (document.getElementById("obchod-hraci").style.display == "flex") {
        document.getElementById("obchod-hraci").style.display = "none";
        document.getElementById("schovat-hraci").innerText = "Ukázat";
    }
    else {
        document.getElementById("obchod-hraci").style.display = "flex";
        document.getElementById("schovat-hraci").innerText = "Schovat";
    }
}

function schovatHaly() {
    if (document.getElementById("obchod-haly").style.display == "flex") {
        document.getElementById("obchod-haly").style.display = "none";
        document.getElementById("schovat-haly").innerText = "Ukázat";
    }
    else {
        document.getElementById("obchod-haly").style.display = "flex";
        document.getElementById("schovat-haly").innerText = "Schovat";
    }
}

function schovatSkupinu(id_skupiny, id_tlacitka) {
    if (document.getElementById(id_skupiny).style.display == "flex") {
        document.getElementById(id_skupiny).style.display = "none";
        document.getElementById(id_tlacitka).innerText = "Ukázat";
    }
    else {
        document.getElementById(id_skupiny).style.display = "flex";
        document.getElementById(id_tlacitka).innerText = "Schovat";
    }
}

function schovatVybaveni() {
    if (document.getElementById("obchod-vybaveni").style.display == "flex") {
        document.getElementById("obchod-vybaveni").style.display = "none";
        document.getElementById("schovat-vybaveni").innerText = "Ukázat";
    }
    else {
        document.getElementById("obchod-vybaveni").style.display = "flex";
        document.getElementById("schovat-vybaveni").innerText = "Schovat";
    }
}

function schovatRolby() {
    if (document.getElementById("skupina-rolby").style.display == "flex") {
        document.getElementById("skupina-rolby").style.display = "none";
        document.getElementById("schovat-rolby").innerText = "Ukázat";
    }
    else {
        document.getElementById("skupina-rolby").style.display = "flex";
        document.getElementById("schovat-rolby").innerText = "Schovat";
    }
}


function prodatVse() {
    localStorage.clear();
    location.reload();
}
