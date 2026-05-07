function zmena() {
    if(document.getElementById("paragraf").innerText == "Guten tag"){
        document.getElementById("paragraf").innerText = "Dobrý den"
    }
    else if(document.getElementById("paragraf").innerText == "Dobrý den"){
        document.getElementById("paragraf").innerText = "Hello"
    }
    else if(document.getElementById("paragraf").innerText == "Hello"){
        document.getElementById("paragraf").innerText = "おはよう"
    }
    else if(document.getElementById("paragraf").innerText == "おはよう"){
        document.getElementById("paragraf").innerText = "Bonjour"
    }
    else if(document.getElementById("paragraf").innerText == "Bonjour"){
        document.getElementById("paragraf").innerText = "Buen día"
    }
    else if(document.getElementById("paragraf").innerText == "Buen día"){
        document.getElementById("paragraf").innerText = "Доброе утро"
    }
    else if(document.getElementById("paragraf").innerText == "Buongiorno"){
        document.getElementById("paragraf").innerText = "Buen día"
    }
    else if(document.getElementById("paragraf").innerText == "Hyvää huomenta"){
        document.getElementById("paragraf").innerText = "Buongiorno"
    }
    else if(document.getElementById("paragraf").innerText == "God morgon"){
        document.getElementById("paragraf").innerText = "Hyvää huomenta"
    }
    else {
        document.getElementById("paragraf").innerText = "Guten tag"
    }
}