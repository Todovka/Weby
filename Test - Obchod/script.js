let cena_nakupu = 0
let pin = 1234
document.getElementById("cena_nakupu").innerText = cena_nakupu

function koupit(cena, jmeno) {
    let cena_produktu = parseInt(document.getElementById(cena).innerText)
    cena_nakupu += cena_produktu
    document.getElementById("cena_nakupu").innerText = cena_nakupu

    let novacena = parseInt(document.getElementById(cena).innerText) * 1.15
    document.getElementById(cena).innerText = Math.round(novacena)
    barva()
    const nova_polozka = document.createElement("span")
    nova_polozka.innerText = jmeno + ", "
    document.getElementById("obsah_kosiku").appendChild(nova_polozka)
}
function zaplatit() {
    let kontorla_pinu = prompt("Zadej PIN tvé platební karty")
    if (kontorla_pinu == pin) {
        prompt("Zadej číslo tvé platební karty")
        prompt("Zadej datum platnosti tvé platební karty")
        prompt("Zadej security kód tvé platební karty")
        alert("Úspěšně zaplaceno")
        cena_nakupu = 0
        document.getElementById("cena_nakupu").innerText = cena_nakupu
        document.getElementById("cenakocka").innerText = "300"
        document.getElementById("cenaformule").innerText = "700"
        document.getElementById("cenahomer").innerText = "450"
    }
    else {
        alert("Špatný PIN")
        cena_nakupu *= 2
        document.getElementById("cena_nakupu").innerText = cena_nakupu
    }
    barva()
}
function barva() {
    if (cena_nakupu < 5000) {
        document.getElementById("cena_nakupu").style.color = "green"
    }
    else if (cena_nakupu < 9500) {
        document.getElementById("cena_nakupu").style.color = "orange"
    }
    else {
        document.getElementById("cena_nakupu").style.color = "red"
    }
}