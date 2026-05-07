
/*

if (podmínka){
    pokud funguje první podmínka, provede se tohle
}

else if(podmínka){
    pokud nejde první podmínka a druhá jo, splní se tohle
}

else{
    pokud neni splněna ani jedna z podmínek, splní se tohle
}


function hadej(){
    let x=Math.floor(Math.random()*10)+1
    let tip = prompt("Hádej číslo")
    
    let pokusy = ++1
    document.getElementById("uhadnuti").innerText = pokusy

    if(tip == x){
        alert("gg Alkane, ez win")
        let uhadnuti = ++1
        document.getElementById("uhadnuti").innerText = uhadnuti
    }
    else if(tip < x){
        alert("víc víc víc, víc víc, víc, víc")
    }
    else if(tip > x){
        alert("míň míň, míň míň míň, míň míň, míň")
    }
    else{
        alert("někdy příště...")
    }

}


*/

let penize = 1000
    document.getElementById("penize").innerText = penize
let dluh = 0
    Number(document.getElementById("dluh").innerText = dluh)
function hadej(){
    
    let x=Math.floor(Math.random()*10)+1
    let tip = prompt("Hádej číslo")

    let pokusy = Number(document.getElementById("pokusy").innerText)
    pokusy++
    document.getElementById("pokusy").innerText = pokusy

    if(penize <= 0){
        alert("došly ti peníze")
    }
    else if(tip ==x){
        alert("gg Alkane, ez win")
        let uhadnuti = Number(document.getElementById("uhadnuti").innerText)
        uhadnuti++
        document.getElementById("uhadnuti").innerText = uhadnuti
        
        penize+=2000
        document.getElementById("penize").innerText = penize
    }
    else if(tip < x){
        alert("víc víc víc, víc víc, víc, víc")
        penize-=100
        document.getElementById("penize").innerText = penize
    }
    else if(tip > x){
        alert("míň míň, míň míň míň, míň míň, míň")
        penize-=100
        document.getElementById("penize").innerText = penize
    }
    else{
        alert("někdy příště...")
    }

}
function banka(){
    if(penize<100){
    penize+=1000
    document.getElementById("penize").innerText = penize
    dluh+=1000
    Number(document.getElementById("dluh").innerText = dluh)
    }
    else{
        alert("vždyť máš prachy")
    }
}
/*
function splatit(){
    if(dluh=0){
        alert("dení žádný dluh!")
    }
    else if(penize>1000){
    dluh-=1000
    Number(document.getElementById("dluh").innerText = dluh)
    penize-=1000
    document.getElementById("penize").innerText = penize
    }
    else{
        alert("nemáš dostatek peněz!")
    }
}
*/