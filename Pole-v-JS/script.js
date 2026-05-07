let pole = 
[
    "Mléko", 
    "Bílý monster",
    "Jupík",
    "Česneková bageta",
    "Čínská polévka",
    "Zmrzlina"
]
kosik()
function kosik(){
    let vypis = pole.join(", ")
    document.getElementById("kosik").innerText = vypis
}
function pridat() {
    let novy_produkt = prompt("Zadejte zboží")
    if(novy_produkt == "" || novy_produkt == null){
        alert("nic jste nepřidali!")
    }
    else{
        pole.push(novy_produkt)
        kosik()
    }
}
function vstup(){
    let novy_produkt = document.getElementById("vstup").value
    if(novy_produkt == ""){
        alert("nic jste nepřidali!")
    }
    else{
        pole.unshift(novy_produkt)
        kosik()
        document.getElementById("vstup").value = null
    }
}
function odebrat() {  
    if(pole.length == 0){
        alert("košík je prázdný")
    }
    else{
        pole.pop()
        kosik()
    }
    
}
function odebrat_dva(){
    if(pole.length == 0){
        alert("košík je prázdný")
    }
    else{
        pole.shift()
        kosik()
    }
}
function odebrat_index(){
    let index = prompt("Zadejte pozici produktu - 1")
    if(index != null){
        pole.splice(index, 1)
        kosik() 
    }
    else(
        kosik()
    )
}