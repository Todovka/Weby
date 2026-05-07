let cena_nakupu = 0
const vypsat_cenu = document.getElementById("cena")
vypsat_cenu.innerText = cena_nakupu

let pin = 1234

function koupit(cena, jmeno) {
    cena_nakupu += parseInt(document.getElementById(cena).innerText)
    vypsat_cenu.innerText = cena_nakupu
    const kosik = document.getElementById("nakupni-kosik")
    const polozka = document.createElement("li")
    polozka.innerText = jmeno
    kosik.appendChild(polozka)

    let nova_cena = parseInt(document.getElementById(cena).innerText) * 1.12
    nova_cena = Math.round(nova_cena)
    document.getElementById(cena).innerText = nova_cena

    if (nova_cena <= 20000) {
        document.getElementById(cena).style.color = "green"
    }
    else if (nova_cena <= 50000) {
        document.getElementById(cena).style.color = "orange"
    }
    else {
        document.getElementById(cena).style.color = "red"
    }
}
function zmena_pinu() {
    pin = prompt("Zadejte nový PIN")
}

function zaplatit() {
    let pin_kontrola = prompt("Zadejte PIN")

    if (pin_kontrola == pin) {
        prompt("Zadejte číslo karty")
        prompt("Zadejte datum expirace")
        prompt("Zadejte Security Code")
        alert("Zaplaceno")
        cena_nakupu = 0
        vypsat_cenu.innerText = cena_nakupu
        const kosik = document.getElementById("nakupni-kosik")
        kosik.innerHTML = ""
        document.getElementById("cena_janek").innerText = 8500
        document.getElementById("cena_stepan").innerText = 12000
        document.getElementById("cena_david").innerText = 5000
        document.getElementById("cena_mira").innerText = 9500
        document.getElementById("cena_ondra").innerText = 17000
        document.getElementById("cena_kuba").innerText = 13000
        document.getElementById("cena_marek").innerText = 11500
        document.getElementById("cena_roman").innerText = 3000
        document.getElementsByClassName("ceny").style.color = "green"
    }
    else {
        alert("Špatnej PIN")
        document.getElementById("cena").innerText = parseInt(document.getElementById("cena").innerText) * 2

    }
}