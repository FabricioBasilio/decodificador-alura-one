const botaoCriptografar = document.getElementById("botao-criptografar");
const botaoDescriptografar = document.getElementById("botao-descriptografar");
const inputDoTexto = document.getElementById("input-texto");
const imagem = document.getElementById("imagem");
const mensagem = document.getElementById("mensagem-saida-de-texto");

botaoCriptografar.addEventListener("click", criptografar);

function criptografar() {
    let texto = inputDoTexto.value;
    let estaMinusculo = checarMinusculo(texto);

    if (!estaMinusculo) {
        alert("É necessário o texto estar com letras minúsculas!")
        return;
    }

    let textoLength = texto.length;

    alert(texto)
    for (let i = 0; i < textoLength; i++) {
        if (texto[i] === "a") {
            texto[i] = "ai"
        }
        else if (texto[i] === "e") {
            texto[i] === "enter"
        }
        else if (texto[i] === "i") {
            texto[i] === "imes"
        }
        else if (texto[i] === "o") {
            texto[i] === "ober"
        }
        else if (texto[i] === "u") {
            texto[i] === "ufat"
        }
    }

    imagem.style.display = "none";
    mensagem.style.display = "none";
}

function checarMinusculo(texto) {
    return texto === texto.toLowerCase();
}