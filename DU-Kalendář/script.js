const pondeli = document.getElementById("lu-po")
const utery = document.getElementById("lu-ut")
const streda = document.getElementById("lu-st")
const ctvrtek = document.getElementById("lu-ct")
const patek = document.getElementById("lu-pa")
const sobota = document.getElementById("lu-so")
const nedele = document.getElementById("lu-ne")

let ukoly_pondeli = 0
let ukoly_utery = 0
let ukoly_streda = 0
let ukoly_ctvrtek = 0
let ukoly_patek = 0
let ukoly_sobota = 0
let ukoly_nedele = 0

function pridat(farba, text) {
    let den = Number(prompt("V jaký dne to chceš udělat? (Po = 1... Ne = 7)"))
    const novy_ukol = document.createElement("div")
    novy_ukol.classList.add("ukol")
    novy_ukol.style.backgroundColor = farba
    novy_ukol.innerHTML = "<span>" + text + "</span>"
    if (den == 1) {
        if (ukoly_pondeli >= 5) {
            alert("Tento den jsi už moc \"BUZZYYY\"")
        } else {
            pondeli.appendChild(novy_ukol)
            ukoly_pondeli += 1
        }
    }
    else if (den == 2) {
        if (ukoly_utery >= 5) {
            alert("Tento den jsi už moc \"BuZY\"")
        } else {
            utery.appendChild(novy_ukol)
            ukoly_utery += 1
        }
    }
    else if (den == 3) {
        if (ukoly_streda >= 5) {
            alert("Tento den jsi už moc \"BUzi\"")
        } else {
            streda.appendChild(novy_ukol)
            ukoly_streda += 1
        }
    }
    else if (den == 4) {
        if (ukoly_ctvrtek >= 5) {
            alert("Tento den jsi už moc \"bUzy\"")
        } else {
            ctvrtek.appendChild(novy_ukol)
            ukoly_ctvrtek += 1
        }
    }
    else if (den == 5) {
        if (ukoly_patek >= 5) {
            alert("Tento den jsi už moc \"BUZZYYYYYYYYYYYYYYYYYYYYYYYYY\"")
        } else {
            patek.appendChild(novy_ukol)
            ukoly_patek += 1
        }
    }
    else if (den == 6) {
        if (ukoly_sobota >= 5) {
            alert("Tento den jsi už moc \"BUZzzZYyyY\"")
        } else {
            sobota.appendChild(novy_ukol)
            ukoly_sobota += 1
        }
    }
    else if (den == 7) {
        if (ukoly_nedele >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            nedele.appendChild(novy_ukol)
            ukoly_nedele += 1
        }
    }
    else {
        alert("EЯЯ0R - something went wrong")
    }
}

function pridat_novy_ukol() {
    let zadani = prompt("Zadej co chceš udělat:")
    let barva = prompt("Zadej barvu co chceš dát úkolu: (barvy zadej anglicky)")
    const ukol = document.createElement("li")
    ukol.innerHTML = zadani + ' <button onclick="pridat(\'' + barva + '\',\'' + zadani + '\')" class="pridat_tlacitko tlacitko">Přidat</button>'
    document.getElementById("ukoly").appendChild(ukol)
}
function vymazat_ukoly(den) {
    let overeni = prompt("Yu šúr? Jestli jo, tak napiš 'y'")
    if (overeni != 'y' || document.getElementById(den).innerHTML == "") {
        alert("https://www.instagram.com/honza_bily/")
    } else {
        document.getElementById(den).innerHTML = ""
    }
}
function obrazek(idcko) {
    let promena = Math.floor(Math.random() * 4 + 1)
    alert("Feeling se změnil")
    document.getElementById(idcko).src = "assets/" + promena + ".jpg"
}
