function zmena_textu() {
    document.getElementById("paragraf").innerText = "error 404" 
}

function klik() {
    let pocet = Number(document.getElementById("pocitadlo").innerText) 
    pocet ++ 
    document.getElementById("pocitadlo").innerText = pocet
}
function mklik() {
    let pocet = Number(document.getElementById("pocitadlo").innerText) 
    pocet --
    document.getElementById("pocitadlo").innerText = pocet
}
function nula() {
    let pocet = Number(document.getElementById("pocitadlo").innerText) 
    pocet = 0
    document.getElementById("pocitadlo").innerText = pocet
}
function orng() {
    document.body.style.backgroundColor = "orange"
    document.body.style.color = "green"
    document.getElementById("roman").innerText = "Zelená"
}
function grn() {
    document.body.style.backgroundColor = "green"
    document.body.style.color = "orange"
    document.getElementById("roman").innerText = "Oranžová"
    
}
function red() {
    document.getElementById("paragraf").style.color = "red"
}
function blue() {
    document.getElementById("paragraf").style.color = "blue"
}
function green() {
    document.getElementById("paragraf").style.color = "green"
}
function změna() {
    document.getElementById("obrazek").style.display = "none"
    //document.getElementById("obrazek").remove()
    //document.getElementById("obrazek").style.opacity = 0.0
}
function jedna() {
    document.getElementById("vanoce").src="assets/images.jfif"
}
function dva() {
    document.getElementById("vanoce").src="assets/xe9nhj67m38a1.jpg"
}
function tri() {
    document.getElementById("vanoce").src="assets/vaeh90oiptr11.webp"
}