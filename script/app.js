// Challenger Alura!

// As "chaves" de criptografia que utilizaremos são:
// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function criptografar () {
    let textarea = document.getElementById('text_area')

    let escrita_usuario = textarea.value;

    if (escrita_usuario == "") {alert("Não há texto para criptografar")} else {

    let criptografado = escrita_usuario.replace("i","imes").replace("a","ai").replace("e","enter").replace("o","ober").replace("u","ufat");

    textarea.value = criptografado;
    }
}

function descriptografar () {

    let textarea = document.getElementById('text_area')
    let escrita_usuario = document.getElementById('text_area').value;
    
    if (escrita_usuario == "") {alert("Não há texto para descriptografar")} else {
    let descriptografado = escrita_usuario.replace("ai","a").replace("enter","e").replace("imes","i").replace("ober","o").replace("ufat","u");
    
    textarea.value = descriptografado;
    }
}

async function copiar () {
    let textarea = document.getElementById('text_area')
    let escrita_usuario = document.getElementById('text_area').value;
    
    await navigator.clipboard.writeText(escrita_usuario);
    alert("Texto copiado");

}



