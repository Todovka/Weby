let chyceni = 0
let body = 0
let chyceni_pokemoni = []

let zkr_ch = document.getElementById("chyceny").innerHTML = chyceni
let zkr_bd = document.getElementById("body").innerHTML = body

function propustit() {
    if (chyceni == 0) {
        alert("Nemáš žádné pokémony")
    }
    else {
        chyceni = 0
        body = 0
        document.getElementById("chyceny").innerHTML = chyceni
        document.getElementById("body").innerHTML = body
        document.getElementById("seznam").innerHTML = ""
    }
}

function chytit(id_body, nazev) {
    let hodnota = parseInt(document.getElementById(id_body).innerText)
    chyceni++
    body += hodnota
    document.getElementById("chyceny").innerHTML = chyceni
    document.getElementById("body").innerHTML = body
    let jmeno = document.getElementById(nazev).innerText
    chyceni_pokemoni.push(jmeno)
    vypsat()
}

function vypsat() {
    let seznam = document.getElementById("seznam")
    seznam.innerHTML = ""
    chyceni_pokemoni.forEach(function (pokemon) {
        let li = document.createElement("li")
        li.innerText = pokemon
        seznam.appendChild(li)
    });
}

function evoluce(obrazek, nadpis, id_nadpis, id_obrazek, id_hodnota, hodnota) {
    document.getElementById(id_obrazek).src = obrazek
    document.getElementById(id_nadpis).innerText = nadpis
    document.getElementById(id_hodnota).innerText = hodnota

}


/*
function evoluceMewtwo_Y(){
    document.getElementById("nadpis_Mewtwo").innerText = "Mewtwo X"
    document.getElementById("obrazek_Mewtwo").src = "assets/Mewtwo_X.png"
}
function evoluceRaichu(){
    document.getElementById("nadpis_Pikachu").innerText = "Raichu"
    document.getElementById("obrazek_Pikachu").src = "assets/Raichu.png"
}
function evoluceCharizard_Y(){
    document.getElementById("nadpis_Charizard").innerText = "Charizard Y"
    document.getElementById("obrazek_Charizard").src = "assets/Charizard_Y.png"
}
*/

/*
function mewtwo(){
    chyceni ++
    body += 250
    document.getElementById("chyceny").innerHTML = chyceni
    document.getElementById("body").innerHTML = body
}
function porygon(){
    chyceni ++
    body += 60
    document.getElementById("chyceny").innerHTML = chyceni
    document.getElementById("body").innerHTML = body
}
function skeledirge(){
    chyceni ++
    body += 120
    document.getElementById("chyceny").innerHTML = chyceni
    document.getElementById("body").innerHTML = body
}
    */