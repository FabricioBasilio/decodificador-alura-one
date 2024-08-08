const botaoCriptografar = document.getElementById("botao-criptografar");
const botaoDescriptografar = document.getElementById("botao-descriptografar");
const inputDoTexto = document.getElementById("input-texto");
const imagem = document.getElementById("imagem");
const mensagem = document.getElementById("mensagem-saida-de-texto");
const saidaTexto = document.getElementById("area-texto-saida");

let saidaTextoAjustada = false;

botaoCriptografar.addEventListener("click", criptografar);
botaoDescriptografar.addEventListener("click", descriptografar);

function criptografar() {
    let texto = inputDoTexto.value;
    let textoLength = texto.length;

    if (textoLength === 0) {
        alert("Não há nenhum texto.");
        return;
    }

    let estaMinusculo = checarCaracteres(texto, textoLength);
    let textoCriptografado;


    if (!estaMinusculo) {
        alert("É necessário o texto estar com letras minúsculas e não apresentar caracteres especiais!");
        return;
    }

    textoArray = texto.split("");

    for (let i = 0; i < textoLength; i++) {

        if (textoArray[i] === "a" || textoArray[i] === "e" || textoArray[i] === "i" || textoArray[i] === "o" || textoArray[i] === "u") {

            if (textoArray[i] === "a") textoArray[i] = "ai";
            else if (textoArray[i] === "e") textoArray[i] = "enter";
            else if (textoArray[i] === "i") textoArray[i] = "imes";
            else if (textoArray[i] === "o") textoArray[i] = "ober";
            else textoArray[i] = "ufat";

        }

    }

    textoCriptografado = textoArray.join("");

    adicionarTexto(textoCriptografado);
}


function descriptografar() {
    let texto = inputDoTexto.value;
    let textoLength = texto.length;

    if (textoLength === 0) {
        alert("Não há nenhum texto.");
        return;
    }

    let estaMinusculo = checarCaracteres(texto, textoLength);
    let textoDescriptografado;


    if (!estaMinusculo) {
        alert("É necessário o texto estar com letras minúsculas e não apresentar caracteres especiais!");
        return;
    }

    textoDescriptografado = texto.replace(/ai/g, "a");
    textoDescriptografado = textoDescriptografado.replace(/enter/g, "e");
    textoDescriptografado = textoDescriptografado.replace(/imes/g, "i");
    textoDescriptografado = textoDescriptografado.replace(/ober/g, "o");
    textoDescriptografado = textoDescriptografado.replace(/ufat/g, "u");

    adicionarTexto(textoDescriptografado);
}

function adicionarTexto(texto) {
    if (saidaTextoAjustada === false) {
        let paragrafo, botaoCopiar, textoParagrafo, textoBotao, divDoTexto;

        imagem.style.display = "none";
        mensagem.style.display = "none";

        paragrafo = document.createElement("p");
        botaoCopiar = document.createElement("button");
        divDoTexto = document.createElement("div");

        textoParagrafo = document.createTextNode(texto);
        textoBotao = document.createTextNode("Copiar");

        paragrafo.appendChild(textoParagrafo);
        paragrafo.id = "texto-saida";
        paragrafo.classList.add("paragrafo-saida-de-texto");

        divDoTexto.appendChild(paragrafo);
        divDoTexto.classList.add("div-do-paragrafo");

        botaoCopiar.appendChild(textoBotao);
        botaoCopiar.classList.add("botao-copiar");
        botaoCopiar.addEventListener("click", copiarTexto);

        saidaTexto.appendChild(divDoTexto);
        saidaTexto.appendChild(botaoCopiar);

        saidaTexto.classList.add("saida-de-texto-ajustada");

        saidaTextoAjustada = true;
    }
    else {
        let paragrafo;

        paragrafo = document.getElementById("texto-saida");

        paragrafo.innerText = texto;

    }
}

function copiarTexto() {
    const textoSaida = document.getElementById("texto-saida").innerText;
    navigator.clipboard.writeText(textoSaida);
}

function checarCaracteres(texto, textoLength) {
    for (let i = 0; i < textoLength; i++) {
        let caractere = texto.charCodeAt(i);
        if (!(caractere >= 97 && caractere <= 122)) {
            return false;
        }
    }
    return true;
}