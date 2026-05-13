function fce_vypsat_ukoly() {
    document.getElementById("pocet_ukolu").innerText = vsechny_ukoly
}

function fce_buzerujici_text() {
    const buzerujici_text = document.getElementById("buzerujici_text")
    if (vsechny_ukoly == 0) {
        buzerujici_text.innerText = "Tenhle tejden ještě nemáš nic na plánu"
        document.getElementById("pocet_ukolu").style.color = "black"
    }
    else if (vsechny_ukoly < 8 && vsechny_ukoly > 0) {
        buzerujici_text.innerText = "Furt je tady čas na to scrolovat TikTok"
        document.getElementById("pocet_ukolu").style.color = "green"
    }
    else if (vsechny_ukoly >= 8 && vsechny_ukoly < 35) {
        buzerujici_text.innerText = "Odteď slovo 'lenost' neexistuje"
        document.getElementById("pocet_ukolu").style.color = "orange"
    }
    else if (vsechny_ukoly == 35) {
        buzerujici_text.innerText = "Dosáhnul jsi maximálního počtu úkolů "
        document.getElementById("pocet_ukolu").style.color = "red"
    }
    else {
        buzerujici_text.innerText = "Tohle nefituje ani stránka sama"
        document.getElementById("pocet_ukolu").style.color = "black"
    }
}

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

let vsechny_ukoly = 0
fce_vypsat_ukoly()
fce_buzerujici_text()

function pridat(farba, text) {
    let den = Number(prompt("V jaký dne to chceš udělat? (Po = 1... Ne = 7)"))
    const novy_ukol = document.createElement("div")
    novy_ukol.classList.add("ukol")
    novy_ukol.style.backgroundColor = farba
    novy_ukol.innerHTML = "<span>" + text + "</span>"
    if (den == 1) {
        if (ukoly_pondeli >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            pondeli.appendChild(novy_ukol)
            ukoly_pondeli += 1
            vsechny_ukoly += 1
            fce_vypsat_ukoly()
            fce_buzerujici_text()
        }
    }
    else if (den == 2) {
        if (ukoly_utery >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            utery.appendChild(novy_ukol)
            ukoly_utery += 1
            vsechny_ukoly += 1
            fce_vypsat_ukoly()
            fce_buzerujici_text()
        }
    }
    else if (den == 3) {
        if (ukoly_streda >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            streda.appendChild(novy_ukol)
            ukoly_streda += 1
            vsechny_ukoly += 1
            fce_vypsat_ukoly()
            fce_buzerujici_text()
        }
    }
    else if (den == 4) {
        if (ukoly_ctvrtek >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            ctvrtek.appendChild(novy_ukol)
            ukoly_ctvrtek += 1
            vsechny_ukoly += 1
            fce_vypsat_ukoly()
            fce_buzerujici_text()
        }
    }
    else if (den == 5) {
        if (ukoly_patek >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            patek.appendChild(novy_ukol)
            ukoly_patek += 1
            vsechny_ukoly += 1
            fce_vypsat_ukoly()
            fce_buzerujici_text()
        }
    }
    else if (den == 6) {
        if (ukoly_sobota >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            sobota.appendChild(novy_ukol)
            ukoly_sobota += 1
            vsechny_ukoly += 1
            fce_vypsat_ukoly()
            fce_buzerujici_text()
        }
    }
    else if (den == 7) {
        if (ukoly_nedele >= 5) {
            alert("Tento den jsi už moc \"Zaneprázdněn\"")
        } else {
            nedele.appendChild(novy_ukol)
            ukoly_nedele += 1
            vsechny_ukoly += 1
            fce_vypsat_ukoly()
            fce_buzerujici_text()
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

function obrazek(idcko, penize_dne, plus_minus_penize) {

    let rozpocet = Number(document.getElementById(penize_dne).innerHTML)
    if (rozpocet + plus_minus_penize < 0) {
        alert("Nemáš tolik rozpočtu na změnění nálady")
    }
    else {
        let promena = Math.floor(Math.random() * 8 + 1)
        document.getElementById(idcko).src = "assets/" + promena + ".jpg"
        rozpocet += plus_minus_penize
        document.getElementById(penize_dne).innerHTML = rozpocet
    }
}
function gamba(idcko) {
    let rozpocet = Number(document.getElementById(idcko).innerHTML)
    let penize = Number(prompt("Kolik sázíš?"))
    if (penize > rozpocet) {
        alert("Nemáš takový kapitál")
    } else {
        let cislo = Math.floor(Math.random() * 10 + 1)
        let tip = Number(prompt(("Uhodni číslo (od 1 do 10)")))
        if (tip == cislo) {
            alert("Právě jsi okradnul kasíno")
            rozpocet = rozpocet + penize * 2
            document.getElementById(idcko).innerHTML = rozpocet
        } else {
            alert("Tvé preníze byli znárodněny")
            rozpocet = rozpocet - penize
            document.getElementById(idcko).innerHTML = rozpocet
        }
    }
}

function vymazat_ukoly() {
    let overeni = prompt("Yu šúr? Jestli jo, tak napiš 'y'")
    if (overeni != 'y') {
        alert("Nic se mazat nebude, koukej arbajťyt")
    } else {
        document.getElementById("lu-po").innerHTML = ""
        document.getElementById("lu-ut").innerHTML = ""
        document.getElementById("lu-st").innerHTML = ""
        document.getElementById("lu-ct").innerHTML = ""
        document.getElementById("lu-pa").innerHTML = ""
        document.getElementById("lu-so").innerHTML = ""
        document.getElementById("lu-ne").innerHTML = ""
        ukoly_pondeli = 0
        ukoly_utery = 0
        ukoly_streda = 0
        ukoly_ctvrtek = 0
        ukoly_patek = 0
        ukoly_sobota = 0
        ukoly_nedele = 0
        vsechny_ukoly = 0
        fce_vypsat_ukoly()
        fce_buzerujici_text()
    }
}
