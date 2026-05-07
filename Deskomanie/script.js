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
/* 

     let pocet = document.getElementById("activitycount").innerText
     pocet++
     document.getElementById("activitycount").innerText = pocet
     */
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

//count + -

let pocetactivity = 1
function activityplus(){
    pocetactivity++
    document.getElementById("activitypocet").innerText = pocetactivity
}
function activityminus(){
    if(pocetactivity == 1){
    document.getElementById("activity-karta").style.display = "none";
    document.getElementById("activityobchod").style.display = "";
    }
    else{
        pocetactivity--
        document.getElementById("activitypocet").innerText = pocetactivity
    }
}

let pocetdostihy = 1
function dostihyasazkyplus(){
    pocetdostihy++
    document.getElementById("dostihyasazkypocet").innerText = pocetdostihy
}
function dostihyasazkyminus(){
    if(pocetdostihy == 1){
    document.getElementById("dostihyasazky-karta").style.display = "none";
    document.getElementById("dostihyasazkyobchod").style.display = "";
    }
    else{
        pocetdostihy--
        document.getElementById("dostihyasazkypocet").innerText = pocetdostihy
    }
}

let pocetscrabble = 1
function scrabbleplus(){
    pocetscrabble++
    document.getElementById("scrabblepocet").innerText = pocetscrabble
}
function scrabbleminus(){
    if(pocetscrabble == 1){
    document.getElementById("scrabble-karta").style.display = "none";
    document.getElementById("scrabbleobchod").style.display = "";
    }
    else{
        pocetscrabble--
        document.getElementById("scrabblepocet").innerText = pocetscrabble
    }
}

let pocetmonopoly = 1
function monopolyplus(){
    pocetmonopoly++
    document.getElementById("monopolypocet").innerText = pocetmonopoly
}
function monopolyminus(){
    if(pocetmonopoly == 1){
    document.getElementById("monopoly-karta").style.display = "none";
    document.getElementById("monopolyobchod").style.display = "";
    }
    else{
        pocetmonopoly--
        document.getElementById("monopolypocet").innerText = pocetmonopoly
    }
}

let pocetdixit = 1
function dixitplus(){
    pocetdixit++
    document.getElementById("dixitpocet").innerText = pocetdixit
}
function dixitminus(){
    if(pocetdixit == 1){
    document.getElementById("dixit-karta").style.display = "none";
    document.getElementById("dixitobchod").style.display = "";
    }
    else{
        pocetdixit--
        document.getElementById("dixitpocet").innerText = pocetdixit
    }
}

let pocetcarcassonne = 1
function carcassonneplus(){
    pocetcarcassonne++
    document.getElementById("carcassonnepocet").innerText = pocetcarcassonne
}
function carcassonneminus(){
    if(pocetcarcassonne == 1){
    document.getElementById("carcassonne-karta").style.display = "none";
    document.getElementById("carcassonneobchod").style.display = "";
    }
    else{
        pocetcarcassonne--
        document.getElementById("carcassonnepocet").innerText = pocetcarcassonne
    }
}

let pocetbang = 1
function bangplus(){
    pocetbang++
    document.getElementById("bangpocet").innerText = pocetbang
}
function bangminus(){
    if(pocetbang == 1){
    document.getElementById("bang-karta").style.display = "none";
    document.getElementById("bangobchod").style.display = "";
    }
    else{
        pocetbang--
        document.getElementById("bangpocet").innerText = pocetbang
    }
}

let pocetkryci = 1
function krycijmenaplus(){
    pocetkryci++
    document.getElementById("krycijmenapocet").innerText = pocetkryci
}
function krycijmenaminus(){
    if(pocetkryci == 1){
    document.getElementById("krycijmena-karta").style.display = "none";
    document.getElementById("krycijmenaobchod").style.display = "";
    }
    else{
        pocetkryci--
        document.getElementById("krycijmenapocet").innerText = pocetkryci
    }
}

let pocetkarak = 1
function karakplus(){
    pocetkarak++
    document.getElementById("karakpocet").innerText = pocetkarak
}
function karakminus(){
    if(pocetkarak == 1){
    document.getElementById("kkarak-karta").style.display = "none";
    document.getElementById("karakobchod").style.display = "";
    }
    else{
        pocetkarak--
        document.getElementById("karakpocet").innerText = pocetkarak
    }
}

let pocetvybusnekocky = 1
function vybusnekockyplus(){
    pocetvybusnekocky++
    document.getElementById("vybusnekockypocet").innerText = pocetvybusnekocky
}
function vybusnekockyminus(){
    if(pocetvybusnekocky == 1){
    document.getElementById("vybusnekocky-karta").style.display = "none";
    document.getElementById("vybusnekockyobchod").style.display = "";
    }
    else{
        pocetvybusnekocky--
        document.getElementById("vybusnekockypocet").innerText = pocetvybusnekocky
    }
}

let pocetubongo = 1
function ubongoplus(){
    pocetubongo++
    document.getElementById("ubongopocet").innerText = pocetubongo
}
function ubongominus(){
    if(pocetubongo == 1){
    document.getElementById("ubongo-karta").style.display = "none";
    document.getElementById("ubongoobchod").style.display = "";
    }
    else{
        pocetubongo--
        document.getElementById("ubongopocet").innerText = pocetubongo
    }
}

let pocettickettoride = 1
function tickettorideplus(){
    pocettickettoride++
    document.getElementById("tickettoridepocet").innerText = pocettickettoride
}
function tickettorideminus(){
    if(pocettickettoride == 1){
    document.getElementById("tickettoride-karta").style.display = "none";
    document.getElementById("tickettorideobchod").style.display = "";
    }
    else{
        pocettickettoride--
        document.getElementById("tickettoridepocet").innerText = pocettickettoride
    }
}

let pocetdivusveta = 1
function sedmdivusvetaplus(){
    pocetdivusveta++
    document.getElementById("divusvetapocet").innerText = pocetdivusveta
}
function sedmdivusvetaminus(){
    if(pocetdivusveta == 1){
    document.getElementById("divu-sveta-karta").style.display = "none";
    document.getElementById("sedmdivusvetaobchod").style.display = "";
    }
    else{
        pocetdivusveta--
        document.getElementById("divusvetapocet").innerText = pocetdivusveta
    }
}

let pocetjizdenky = 1
function jizdenkyprosimplus(){
    pocetjizdenky++
    document.getElementById("jizdenkyprosimpocet").innerText = pocetjizdenky
}
function jizdenkyprosimminus(){
    if(pocetjizdenky == 1){
    document.getElementById("jizdenky-prosim-karta").style.display = "none";
    document.getElementById("jizdenkyprosimobchod").style.display = "";
    }
    else{
        pocetjizdenky--
        document.getElementById("jizdenkyprosimpocet").innerText = pocetjizdenky
    }
}

let pocetduch = 1
function duchplus(){
    pocetduch++
    document.getElementById("duchpocet").innerText = pocetduch
}
function duchminus(){
    if(pocetduch == 1){
    document.getElementById("duch-karta").style.display = "none";
    document.getElementById("duchobchod").style.display = "";
    }
    else{
        pocetduch--
        document.getElementById("duchpocet").innerText = pocetduch
    }
}
