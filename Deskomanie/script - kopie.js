//vyhledávání
async function hledat() {
    document.getElementById("error").innerText = "něco se pokazilo, vyzkoušejte to prosím znovu";
    await new Promise(resolve => setTimeout(resolve, 5000));
    /* 
    async řekne že funkce nebude hotová hned po spuštění
    await řekne tady se zastav a počkej
    promise reprezentuje nezadanou hodnotu
    1. resolve udává, že funkce bude říkat resolve (řešení)
    2. resolve ríká počkej čas (ms)
    */
    document.getElementById("error").innerText = "";
}

//kosik

function kosik() {
    if (document.getElementById("kosik").style.display = "none") {
        document.getElementById("kosik").style.display = "block"
    }

    else
        document.getElementById("kosik").style.display = "none"
}



//funkce na odebrání z obchodu a přídání do košíku

function activity() {
    document.getElementById("activity-karta").style.display = "block";
    document.getElementById("activityobchod").style.display = "none";
}

function dostihyasazky() {
    document.getElementById("dostihyasazky-karta").style.display = "block";
    document.getElementById("dostihyasazkyobchod").style.display = "none";
}

function scrabble() {
    document.getElementById("scrabble-karta").style.display = "block";
    document.getElementById("scrabbleobchod").style.display = "none";
}

function monopoly() {
    document.getElementById("monopoly-karta").style.display = "block";
    document.getElementById("monopolyobchod").style.display = "none";
}

function dixit() {
    document.getElementById("dixit-karta").style.display = "block";
    document.getElementById("dixitobchod").style.display = "none";
}

function carcassonne() {
    document.getElementById("carcassonne-karta").style.display = "block";
    document.getElementById("carcassonneobchod").style.display = "none";
}

function bang() {
    document.getElementById("bang-karta").style.display = "block";
    document.getElementById("bangobchod").style.display = "none";
}

function krycijmena() {
    document.getElementById("krycijmena-karta").style.display = "block";
    document.getElementById("krycijmenaobchod").style.display = "none";
}

function karak() {
    document.getElementById("karak-karta").style.display = "block";
    document.getElementById("karakobchod").style.display = "none";
}

function vybusnekocky() {
    document.getElementById("vybusnekocky-karta").style.display = "block";
    document.getElementById("vybusnekockyobchod").style.display = "none";
}

function ubongo() {
    document.getElementById("ubongo-karta").style.display = "block";
    document.getElementById("ubongoobchod").style.display = "none";
}

function tickettoride() {
    document.getElementById("tickettoride-karta").style.display = "block";
    document.getElementById("tickettorideobchod").style.display = "none";
}

function sedmdivusveta() {
    document.getElementById("divu-sveta-karta").style.display = "block";
    document.getElementById("sedmdivusvetaobchod").style.display = "none";
}

function jizdenkyprosim() {
    document.getElementById("jizdenky-prosim-karta").style.display = "block";
    document.getElementById("jizdenkyprosimobchod").style.display = "none";
}

function duch() {
    document.getElementById("duch-karta").style.display = "block";
    document.getElementById("duchobchod").style.display = "none";
}

//funkce na odebrání z košíku a dání zpět do obchodu

function activitykosik() {
    document.getElementById("activity-karta").style.display = "none";
    document.getElementById("activityobchod").style.display = "";
}

function dostihyasazkykosik() {
    document.getElementById("dostihyasazky-karta").style.display = "none";
    document.getElementById("dostihyasazkyobchod").style.display = "";
}

function scrabblekosik() {
    document.getElementById("scrabble-karta").style.display = "none";
    document.getElementById("scrabbleobchod").style.display = "";
}

function monopolykosik() {
    document.getElementById("monopoly-karta").style.display = "none";
    document.getElementById("monopolyobchod").style.display = "";
}

function dixitkosik() {
    document.getElementById("dixit-karta").style.display = "none";
    document.getElementById("dixitobchod").style.display = "";
}

function carcassonnekosik() {
    document.getElementById("carcassonne-karta").style.display = "none";
    document.getElementById("carcassonneobchod").style.display = "";
}

function bangkosik() {
    document.getElementById("bang-karta").style.display = "none";
    document.getElementById("bangobchod").style.display = "";
}

function krycijmenakosik() {
    document.getElementById("krycijmena-karta").style.display = "none";
    document.getElementById("krycijmenaobchod").style.display = "";
}

function karakkosik() {
    document.getElementById("karak-karta").style.display = "none";
    document.getElementById("karakobchod").style.display = "";
}

function vybusnekockykosik() {
    document.getElementById("vybusnekocky-karta").style.display = "none";
    document.getElementById("vybusnekockyobchod").style.display = "";
}

function ubongokosik() {
    document.getElementById("ubongo-karta").style.display = "none";
    document.getElementById("ubongoobchod").style.display = "";
}

function tickettoridekosik() {
    document.getElementById("tickettoride-karta").style.display = "none";
    document.getElementById("tickettorideobchod").style.display = "";
}

function sedmdivusvetakosik() {
    document.getElementById("divu-sveta-karta").style.display = "none";
    document.getElementById("sedmdivusvetaobchod").style.display = "";
}

function jizdenkyprosimkosik() {
    document.getElementById("jizdenky-prosim-karta").style.display = "none";
    document.getElementById("jizdenkyprosimobchod").style.display = "";
}

function duchkosik() {
    document.getElementById("duch-karta").style.display = "none";
    document.getElementById("duchobchod").style.display = "";
}

//schovat kosik
function kosik() {
    if (document.getElementById("kosik").innerText === "Schovat košík") {
        document.getElementById("kosik").innerText = "Zobrazit košík"
    }
    else if (document.getElementById("kosik").innerText === "Zobrazit košík") {
        document.getElementById("kosik").innerText = "Schovat košík"
    }
    else {
        document.getElementById("kosik").innerText = "Nastal problém"
    }
    const deskovky = document.querySelectorAll(".produkt-v-kosiku, .zaplatit");
    deskovky.forEach(function (deskovka) {
        deskovka.classList.toggle("schovanykosik");
    });
}

//zaplatit
 async function zaplatit() {
    document.getElementById("activity-karta").style.display = "none";
    document.getElementById("dostihyasazky-karta").style.display = "none";
    document.getElementById("scrabble-karta").style.display = "none";
    document.getElementById("monopoly-karta").style.display = "none";
    document.getElementById("dixit-karta").style.display = "none";
    document.getElementById("carcassonne-karta").style.display = "none";
    document.getElementById("bang-karta").style.display = "none";
    document.getElementById("krycijmena-karta").style.display = "none";
    document.getElementById("karak-karta").style.display = "none";
    document.getElementById("vybusnekocky-karta").style.display = "none";
    document.getElementById("ubongo-karta").style.display = "none";
    document.getElementById("tickettoride-karta").style.display = "none";
    document.getElementById("divu-sveta-karta").style.display = "none";
    document.getElementById("jizdenky-prosim-karta").style.display = "none";
    document.getElementById("duch-karta").style.display = "none";
    
    document.getElementById("zaplaceno").innerText = "Děkujeme za platbu. Vaše objednávka bude brzy odeslána.";
    await new Promise(resolve => setTimeout(resolve, 5000));
     document.getElementById("zaplaceno").innerText = ""
}