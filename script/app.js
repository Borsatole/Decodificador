// Challenger Alura!

// As "chaves" de criptografia que utilizaremos são:
// A letra "a" é convertida para "ai"
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"



function criptografar () {
    
    let escrita_usuario = document.getElementById('text_area').value;
    let replaced = escrita_usuario.replace("a","ai").replace("e","enter").replace("i","imes").replace("o","ober").replace("u","ufat");

    escrita_usuario.value = '';
    console.log (replaced);
}

function descriptografar () {
    
    let escrita_usuario = document.getElementById('text_area').value;
    let replaced = escrita_usuario.replace("ai","a").replace("enter","e").replace("imes","i").replace("ober","o").replace("ufat","u");
    
    console.log (replaced);
}



