const pondeli = document.getElementById("lu-po")
const utery = document.getElementById("lu-ut")
const streda = document.getElementById("lu-st")
const ctvrtek = document.getElementById("lu-ct")
const patek = document.getElementById("lu-pa")
const sobota = document.getElementById("lu-so")
const nedele = document.getElementById("lu-ne")

function pridat(farba, text) {
    let den = Number(prompt("V jaký dne to chceš udělat? (Po = 1... Ne = 7)"))
    const novy_ukol = document.createElement("div")
    novy_ukol.classList.add("ukol")
    novy_ukol.style.backgroundColor = farba
    novy_ukol.innerHTML = "<span>" + text + "</span>"
    if (den == 1) {
        pondeli.appendChild(novy_ukol)
    }
    else if (den == 2) {
        utery.appendChild(novy_ukol)
    }
    else if (den == 3) {
        streda.appendChild(novy_ukol)
    }
    else if (den == 4) {
        ctvrtek.appendChild(novy_ukol)
    }
    else if (den == 5) {
        patek.appendChild(novy_ukol)
    }
    else if (den == 6) {
        sobota.appendChild(novy_ukol)
    }
    else if (den == 7) {
        nedele.appendChild(novy_ukol)
    }

    else {
        alert("EЯЯ0R - something went wrong")
    }
}

function pridat_novy_ukol() {
    let zadani = prompt("Zadej co chceš udělat:")
    let barva = prompt("Zadej barvu co chceš dát úkolu: (barvy zadej anglicky)")
    const ukol = document.createElement("li")
    ukol.innerHTML = zadani + ' <button onclick="pridat(\'' + barva + '\',\'' + zadani + '\')">Přidat</button>'
    document.getElementById("ukoly").appendChild(ukol)
}