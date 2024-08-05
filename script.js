const botaoCriptografar = document.getElementById("botao-criptografar");
const botaoDescriptografar = document.getElementById("botao-descriptografar");
const inputDoTexto = document.getElementById("input-texto");
const imagem = document.getElementById("imagem");
const mensagem = document.getElementById("mensagem-saida-de-texto");
const saidaTexto = document.getElementById("saida-texto"); 

botaoCriptografar.addEventListener("click", criptografar);
botaoDescriptografar.addEventListener("click", descriptografar);

function criptografar() {
    let texto = inputDoTexto.value;
    let estaMinusculo = checarMinusculo(texto);
    let textoLength = texto.length;

    if (textoLength === 0) {
        alert("Não há nenhum texto.");
        return;
    }
    else if (!estaMinusculo) {
        alert("É necessário o texto estar com letras minúsculas!");
        return;
    }

    let textoArray = texto.split("");

    for (let i = 0; i < textoLength; i++) {
        if (textoArray[i] === "a") {
            textoArray[i] = "ai"
        }
        else if (textoArray[i] === "e") {
            textoArray[i] = "enter"
        }
        else if (textoArray[i] === "i") {
            textoArray[i] = "imes"
        }
        else if (textoArray[i] === "o") {
            textoArray[i] = "ober"
        }
        else if (textoArray[i] === "u") {
            textoArray[i] = "ufat"
        }
    }

    let textoCriptografado = textoArray.join("");

    imagem.style.display = "none";
    mensagem.style.display = "none";
    alert(textoCriptografado);
    
}


function descriptografar() {
    let texto = inputDoTexto.value;
    let estaMinusculo = checarMinusculo(texto);
    let textoLength = texto.length;

    if (textoLength === 0) {
        alert("Não há nenhum texto.");
        return;
    }
    else if (!estaMinusculo) {
        alert("É necessário o texto estar com letras minúsculas!");
        return;
    }

    let textoArray = texto.split("");

    for (let i = 0; i < textoLength; i++) {
        if (textoArray[i] === "ai") {
            textoArray[i] = "a"
        }
        else if (textoArray[i] === "enter") {
            textoArray[i] = "e"
        }
        else if (textoArray[i] === "imes") {
            textoArray[i] = "i"
        }
        else if (textoArray[i] === "ober") {
            textoArray[i] = "o"
        }
        else if (textoArray[i] === "ufat") {
            textoArray[i] = "u"
        }
    }

    let textoDescriptografado = textoArray.join("");

    imagem.style.display = "none";
    mensagem.style.display = "none";
    alert(textoDescriptografado);
    
}

function checarMinusculo(texto) {
    if (texto === texto.toLowerCase()) {
        return true;
    }
    else {
        return false;
    }
}