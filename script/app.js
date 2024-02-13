function criptografar () {
    
    let textarea = document.getElementById('text_area')
    let escrita_usuario = textarea.value;

    if (escrita_usuario == "") {abrir_modal_erro()} else {
    let criptografado = escrita_usuario.replaceAll("i","imes").replaceAll("a","ai").replaceAll("e","enter").replaceAll("o","ober").replaceAll("u","ufat");

    textarea.value = criptografado;
    }
}

function descriptografar () {

    let textarea = document.getElementById('text_area');
    let escrita_usuario = textarea.value ;
    
    if (escrita_usuario == "") {abrir_modal_erro()} else {
    let descriptografado = escrita_usuario.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    
    textarea.value = descriptografado;
    }
}

async function copiar () {
    let textarea = document.getElementById('text_area')
    let escrita_usuario = document.getElementById('text_area').value;

    if (escrita_usuario == "") {abrir_modal_erro()} else{
    await navigator.clipboard.writeText(escrita_usuario);
    alert("Texto copiado");
}
}

var modal = document.getElementById("modal_erro");
var btn_fechar = document.getElementById("tentenovamente");

btn_fechar.addEventListener("click",fechar_modal_erro)

function fechar_modal_erro() {
    modal.style.display = "none";
}

function abrir_modal_erro() {
    modal.style.display = "flex";
}






